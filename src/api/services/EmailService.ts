import formData from 'form-data';
import Mailgun, {MailgunMessageData} from 'mailgun.js';
import Configuration from "../config/Configuration";
import {EmailDTO} from "../../dtos/EmailDTO";

export class EmailService {
    constructor(private mailgun = new Mailgun(formData).client(Configuration().emailCFG) ) {}

    async sendEmail(data: EmailDTO){
        const payload: MailgunMessageData = {
            from: `MLB Bot <${Configuration().email.address}>`,
            to: data.to,
            subject: data.subject,
            text: data.text,
            html: data.html
        }

        this.mailgun.messages.create(Configuration().email.domain, payload)
            .then(msg => console.log(msg))
            .catch(err => console.error(err));
    }
}