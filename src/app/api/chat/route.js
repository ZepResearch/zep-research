// app/api/chat/route.js (Server Component)
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { messages, pdfContent, findRelevantPage } = await request.json();
    
    if (!messages || !pdfContent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create a system message with the PDF content and page detection instructions
    let systemPrompt = `You are an AI assistant that helps with research papers. 
                Answer questions based on the following research paper content:
                
                ${pdfContent}
                
                Always base your answers on the paper content. If the information isn't 
                in the paper, acknowledge that and don't make up information.`;
    
    // Add page detection instructions if requested
    if (findRelevantPage) {
      systemPrompt += `\n\nIMPORTANT: After answering the question, analyze which part of the paper your answer relates to most.
                      Based on your analysis, estimate which page (1-based index) of the paper would be most relevant to show the user.
                      At the end of your response, add a JSON object with the format:
                      
                      [PAGEINFO]{"relevantPage": X}[/PAGEINFO]
                      
                      Where X is your estimated page number (single digit, no explanations). This will not be shown to the user.`;
    }

    const systemMessage = {
      role: 'system',
      content: systemPrompt
    };

    // Filter out any existing system messages and add our new one
    const userMessages = messages.filter(msg => msg.role !== 'system');
    const fullMessages = [systemMessage, ...userMessages];
    
    // Get response from OpenAI
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: fullMessages,
        temperature: 0.7,
        max_tokens: 1000,
      });

      const responseContent = response.choices[0].message.content;
      
      // Extract page info if included
      let relevantPage = null;
      let cleanResponse = responseContent;
      
      if (findRelevantPage) {
        const pageInfoMatch = responseContent.match(/\[PAGEINFO\](.*?)\[\/PAGEINFO\]/);
        if (pageInfoMatch && pageInfoMatch[1]) {
          try {
            const pageInfo = JSON.parse(pageInfoMatch[1]);
            relevantPage = pageInfo.relevantPage;
            // Remove the page info from the response
            cleanResponse = responseContent.replace(/\[PAGEINFO\](.*?)\[\/PAGEINFO\]/, '').trim();
          } catch (e) {
            console.error('Error parsing page info:', e);
          }
        }
      }

      return NextResponse.json({ 
        response: cleanResponse,
        relevantPage
      });
    } catch (aiError) {
      console.error('OpenAI API error:', aiError);
      return NextResponse.json(
        { error: 'Failed to get AI response' },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to get chat response' },
      { status: 500 }
    );
  }
}