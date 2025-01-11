import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export default async (req, res) => {
    const allowedOrigins = ['https://www.party-booth.gr', 'https://party-booth.gr'];
    const origin = req.headers.origin || '';

    // Check if the origin is allowed
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    const {fullName, contactNumber, email, location, date, message, services} = req.body || {};
    const {data, error} = await resend.emails.send({
        from: 'Photo Booth | SKG <you@party-booth.gr>',
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

    if (error) {
        return res.status(400).json(error);
    }
    res.status(200).json({success: true, data});
}
