const nodemailer = require("nodemailer");
const dotenv = require('dotenv')
dotenv.config();

// Function to send an email
async function sendEmail(recipient, subject, text) {
    try {
        // Create a Nodemailer transporter using SMTP
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL, // Your Gmail address
                pass: process.env.EMAIL_PASS // Your Gmail password
            }
        });
    
        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: process.env.EMAIL, // Sender address
            to: recipient, // List of recipients
            subject: subject, // Subject line
            text: text // Plain text body
        });
    
        console.log("Message sent: %s", info.messageId);
        
    } catch (error) {
        throw new Error("error sending email!")
    }
}

export { sendEmail };