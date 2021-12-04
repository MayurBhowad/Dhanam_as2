const nodemailer = require('nodemailer');

const sendMail = (to_mail) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.AUTH_EMAIL,
                pass: process.env.AUTH_EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to: to_mail,
            subject: 'Register SUccessesfull!',
            html: '<div><h1>Welcome</h1><br><p>Thank you, Registration successfull!</p></div>'
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                reject(err)
            } else {
                resolve(info)
            }
        })
    })
}

module.exports = sendMail