// pages/api/sendMail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { fullName, contactNumber, email, location, date, message, services } = req.body;

        // Create a transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: false, // TLS is used instead of SSL
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: `"Contact Form" <${process.env.EMAIL_USER}>`, // sender address
            to: process.env.EMAIL_USER,
            subject: "New Contact Form Submission",
            text: `You have a new submission from: 
             Name: ${fullName}
             Contact Number: ${contactNumber}
             Email: ${email}
             Location: ${location}
             Date: ${date}
             Message: ${message}
             Services: ${services.join(", ")}`,
        });

        console.log("Message sent: %s", info.messageId);
        return res.status(200).json({ message: 'Email sent successfully' });
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}
