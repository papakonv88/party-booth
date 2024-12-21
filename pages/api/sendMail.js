import {Resend} from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);
export default async (req, res) => {
    const {fullName, contactNumber, email, location, date, message, services} = req.body;
    // Send the email
    const {data, error} = await resend.emails.send({
        from: 'Contact Form <no-reply@resend.dev>', // sender address
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
