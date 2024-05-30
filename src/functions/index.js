const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'randevusistemi@gmail.com',
        pass: '123456'
    }
});

// Firebase Function
exports.sendEmail = functions.https.onCall((data, context) => {
    const mailOptions = {
        from: 'randevusistemi@gmail.com',
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