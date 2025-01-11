import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export default async (req, res) => {
    console.log('hiii')
    const {fullName, contactNumber, email, location, date, message, services} = req.body || {fullName: 'test', contactNumber: '1234', email: 'sdds@sdsd.com', location: 'fdfd', date: 'ddsds', message: 'sdsd', services: ['sdsds', 'sdsdsd']};
    const {data, error} = await resend.emails.send({
        from:  'Photo Booth | SKG <you@party-booth.gr>',
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
