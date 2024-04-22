import nodemailer from "nodemailer";
import { html_email } from "../htmlTemplateEmail/email_html_tenplate";


const transport = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port:  587,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: '@Connectividade1103#'
    }
});

export const sendNodeMailer = (to:string, name:string) => {

    transport.sendMail({
        from: process.env.MAIL_FROM,
        to,
        subject: `Email resposta de Claudio Soares`,
        html:html_email(name)
    });

    return "Email successfully sent!"
};