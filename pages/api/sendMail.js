import nodemailer from 'nodemailer';
import { google } from "googleapis";

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { fullName, contactNumber, email, location, date, message, services } = req.body;

        oAuth2Client.getAccessToken()
            .then((accessToken) => {
                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        type: "OAuth2",
                        user: process.env.EMAIL_USER,
                        clientId: CLIENT_ID,
                        clientSecret: CLIENT_SECRET,
                        refreshToken: REFRESH_TOKEN,
                        accessToken: accessToken.token,
                    },
                });

                const mailOptions = {
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
                };

                return new Promise((resolve, reject) => {
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(info);
                        }
                    });
                });
            })
            .then((info) => {
                console.log("Message sent: %s", info.messageId);
                res.status(200).json({ message: 'Email sent successfully' });
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                res.status(500).json({ error: "Failed to send email", details: error });
            });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
