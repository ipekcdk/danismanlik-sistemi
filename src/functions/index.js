const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Nodemailer konfigürasyonu
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

// Firebase Function
exports.sendEmail = functions.https.onCall((data, context) => {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: data.email,
        subject: data.subject,
        text: data.message
    };

    return transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return { success: false, error: error.toString() };
        }
        return { success: true };
    });
});