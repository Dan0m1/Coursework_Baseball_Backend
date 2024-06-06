import formData from 'form-data';
import Mailgun, {MailgunMessageData} from 'mailgun.js';
import {emailConfig} from "../config/EmailConfig";
import {EmailDTO} from "../../dtos/EmailDTO";

export class EmailService {
    constructor(private mailgun = new Mailgun(formData).client(emailConfig) ) {}

    async sendEmail(data: EmailDTO){
        const payload: MailgunMessageData = {
            from: `MLB Bot <${process.env.EMAIL_ADDRESS}>`,
            to: data.to,
            subject: data.subject,
            text: data.text,
            html: data.html
        }

        this.mailgun.messages.create(process.env.EMAIL_DOMAIN, payload)
            .then(msg => console.log(msg))
            .catch(err => console.error(err));
    }
}