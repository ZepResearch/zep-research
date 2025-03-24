const ClientConfirmationEmail = (data) => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>We've Received Your Message</title>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
          
          body {
              font-family: 'Inter', Arial, sans-serif;
              line-height: 1.6;
              color: #333333;
              background-color: #f0f9fa;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0, 163, 173, 0.15);
          }
          .header {
              background-color: #06b6d4;
              color: white;
              padding: 30px 20px;
              text-align: center;
          }
          .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 700;
          }
          .content {
              padding: 30px 20px;
          }
          .message {
              font-size: 16px;
              color: #333333;
              background-color: #f0fafc;
              padding: 20px;
              border-radius: 6px;
              border-left: 4px solid #06b6d4;
              margin-bottom: 20px;
          }
          .highlight {
              color: #0891b2;
              font-weight: 600;
          }
          .info-list {
              background-color: #f0fafc;
              padding: 15px 20px;
              border-radius: 6px;
              margin: 20px 0;
          }
          .info-list ul {
              list-style-type: none;
              padding: 0;
              margin: 0;
          }
          .info-list li {
              padding: 8px 0;
              border-bottom: 1px dashed #c8eeef;
          }
          .info-list li:last-child {
              border-bottom: none;
          }
          .footer {
              text-align: center;
              padding: 20px;
              background-color: #ecfeff;
              color: #0e7490;
              font-size: 12px;
              border-top: 1px solid #c8eeef;
          }
          .button {
              display: inline-block;
              background-color: #06b6d4;
              color: white;
              text-decoration: none;
              padding: 10px 20px;
              border-radius: 4px;
              margin-top: 15px;
              font-weight: 600;
          }
          @media only screen and (max-width: 600px) {
              .container {
                  margin: 0;
                  border-radius: 0;
              }
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>We've Received Your Message</h1>
          </div>
          <div class="content">
              <div class="message">
                  <p>Dear <span class="highlight">${data.name}</span>,</p>
                  <p>Thank you for reaching out to us. We have successfully received your message and our team will get back to you within <span class="highlight">24 hours</span>.</p>
                  
                  <p>Here's a summary of the information you provided:</p>
                  <div class="info-list">
                      <ul>
                          <li><strong>Name:</strong> ${data.name}</li>
                          <li><strong>Email:</strong> ${data.email}</li>
                          <li><strong>Subject:</strong> ${data.subject}</li>
                          <li><strong>Message:</strong> "${data.message.substring(0, 50)}${data.message.length > 50 ? '...' : ''}"</li>
                      </ul>
                  </div>
                  
                  <p>If you need to add any information to your request, please feel free to reply to this email.</p>
                  <p>Best regards,<br>The Support Team</p>
                  
                  <a href="#" class="button">Visit Our Website</a>
              </div>
          </div>
          <div class="footer">
              This is an automated response. Please do not reply to this email if you need assistance.
          </div>
      </div>
  </body>
  </html>
    `;
  };
  
  export default ClientConfirmationEmail;