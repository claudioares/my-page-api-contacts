import nodemailer from "nodemailer";
import { html_email } from "../htmlTemplateEmail/email_html_tenplate";


const transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port:  2525,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

export const sendNodeMailer = (to:string) => {

    transport.sendMail({
        from: process.env.MAIL_FROM,
        to,
        subject: `Email resposta de Claudio Soares`,
        html:html_email(to)
    });

    return "Email successfully sent!"
};