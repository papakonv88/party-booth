import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://www.party-booth.gr');
    if (req.method === 'POST') {
        const { fullName, contactNumber, email, location, date, message, services } = req.body;

        try {
            // Send the email
            const data = await resend.emails.send({
                from: `"Contact Form" <no-reply@resend.dev>`, // sender address
                to: process.env.EMAIL_USER,
                subject: "Photo Booth Email Request",
                text: `New Message: 
                     Name: ${fullName}
                     Contact Number: ${contactNumber}
                     Email: ${email}
                     Location: ${location}
                     Date: ${date}
                     Message: ${message}
                     Services: ${services.join(", ")}`,
            });

            res.status(200).json({ success: true, data });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
