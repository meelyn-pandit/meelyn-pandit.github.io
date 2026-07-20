import nodemailer from 'nodemailer'

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })
    }

    async sendEmail(to, subject, text) {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text
        }

        return this.transporter.sendMail(mailOptions)
    }
}

export default EmailService
