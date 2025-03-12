import { NextResponse } from 'next/server';
import pdfParse from 'pdf-parse';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const pdfFile = formData.get('pdf');
    
    if (!pdfFile) {
      return NextResponse.json(
        { error: 'No PDF file uploaded' },
        { status: 400 }
      );
    }

    // Convert the file to a buffer
    const arrayBuffer = await pdfFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Extract text from PDF using pdf-parse directly here
    try {
      const data = await pdfParse(buffer);
      return NextResponse.json({ content: data.text });
    } catch (parseError) {
      console.error('Error parsing PDF:', parseError);
      return NextResponse.json(
        { error: 'Failed to parse PDF content' },
        { status: 422 }
      );
    }
  } catch (error) {
    console.error('Error processing PDF:', error);
    return NextResponse.json(
      { error: 'Failed to process PDF' },
      { status: 500 }
    );
  }
}