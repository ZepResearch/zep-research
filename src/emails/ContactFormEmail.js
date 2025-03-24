const ContactFormEmail = (data) => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
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
          .field {
              margin-bottom: 20px;
              border-bottom: 1px solid #e0f2fe;
              padding-bottom: 15px;
          }
          .field:last-child {
              border-bottom: none;
              padding-bottom: 0;
          }
          .label {
              font-weight: 600;
              color: #0891b2;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 8px;
          }
          .value {
              font-size: 16px;
              color: #333333;
              background-color: #f0fafc;
              padding: 12px 15px;
              border-radius: 6px;
              border-left: 4px solid #06b6d4;
          }
          .message-value {
              font-size: 16px;
              color: #333333;
              background-color: #f0fafc;
              padding: 12px 15px;
              border-radius: 6px;
              border-left: 4px solid #06b6d4;
              white-space: pre-line;
          }
          .footer {
              text-align: center;
              padding: 20px;
              background-color: #ecfeff;
              color: #0e7490;
              font-size: 12px;
              border-top: 1px solid #c8eeef;
          }
          .info-box {
              margin-top: 20px;
              padding: 15px;
              background-color: #cffafe;
              border-radius: 6px;
              font-size: 14px;
              color: #0e7490;
          }
          .timestamp {
              text-align: right;
              font-size: 12px;
              color: #0e7490;
              margin-top: 15px;
              font-style: italic;
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
              <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
              <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${data.name}</div>
              </div>
              <div class="field">
                  <div class="label">Email</div>
                  <div class="value">${data.email}</div>
              </div>
              <div class="field">
                  <div class="label">Subject</div>
                  <div class="value">${data.subject}</div>
              </div>
              <div class="field">
                  <div class="label">Message</div>
                  <div class="message-value">${data.message}</div>
              </div>
              
              <div class="info-box">
                  This submission was received from your website's contact form.
                  <div class="timestamp">Submitted on: ${new Date().toLocaleString()}</div>
              </div>
          </div>
          <div class="footer">
              Reply directly to this email to contact the sender.
          </div>
      </div>
  </body>
  </html>
  `;
  };
  
  export default ContactFormEmail;