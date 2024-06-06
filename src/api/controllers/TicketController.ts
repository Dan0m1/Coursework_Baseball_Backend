import {TicketService} from "../services/TicketService";
import {TicketMapper} from "../mappers/TicketMapper";
import {GetAllTicketDTO} from "../../dtos/GetAllTicketDTO";
import {Request, Response} from "express";
import {CreateTicketDTO} from "../../dtos/CreateTicketDTO";
import {EmailService} from "../services/EmailService";
import {HTMLTemplate} from "../../templates/HTML/HTML_Template";
import {EmailDTO} from "../../dtos/EmailDTO";

export class TicketController {
    constructor(private ticketService: TicketService, private ticketMapper: TicketMapper, private emailService: EmailService, private htmlTemplate: HTMLTemplate) {}

    async getMany(req: Request, res: Response){
        const body: GetAllTicketDTO = req.body;

        try {
            const response = await this.ticketService.getAllByUserId(body);
            const tickets = this.ticketMapper.getTickets(response);
            res.send(tickets);
        } catch (e){
            if(e instanceof Error){
                if(e.message == "404"){
                    res.sendStatus(404);
                }
            }
        }
    }

    async create(req: Request, res: Response){
        const body: CreateTicketDTO = req.body;

        const response = await this.ticketService.create(body);
        const ticket = this.ticketMapper.getOneTicket(response);
        res.send(ticket);

        console.log("ticket created")

        const htmlPayload = this.ticketMapper.getHtmlPayload(response);
        const html = await this.htmlTemplate.getHTML(htmlPayload);
        const emailPayload: EmailDTO={
            to: [ticket.email],
            subject: "Квиток MLB",
            text: "Дякуємо за користування нашим ботом!",
            html:html
        }
        await this.emailService.sendEmail(emailPayload);


    }
}