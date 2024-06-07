import {TicketService} from "../services/TicketService";
import {TicketMapper} from "../mappers/TicketMapper";
import {GetAllTicketDTO} from "../../dtos/GetAllTicketDTO";
import {Request, Response} from "express";
import {CreateTicketDTO} from "../../dtos/CreateTicketDTO";
import {EmailService} from "../services/EmailService";
import {HTMLTemplate} from "../../templates/HTML/HTML_Template";
import {EmailDTO} from "../../dtos/EmailDTO";
import {DBTicket} from "../../database/entities/DBTicket";
import {TicketResponse} from "../responses/TicketResponse";
import {HTMLData} from "../../templates/HTML/HTMLData";

export class TicketController {
    constructor(private ticketService: TicketService, private ticketMapper: TicketMapper, private emailService: EmailService, private htmlTemplate: HTMLTemplate) {}

    async getMany(req: Request, res: Response){
        const body: GetAllTicketDTO = req.body;

        try {
            const response: DBTicket[] = await this.ticketService.getAllByUserId(body);
            const tickets: TicketResponse[] = this.ticketMapper.getTickets(response);
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

        const response: DBTicket = await this.ticketService.create(body);
        const ticket: TicketResponse = this.ticketMapper.getOneTicket(response);
        res.send(ticket);

        const htmlPayload: HTMLData = this.ticketMapper.getHtmlPayload(response);
        const html: string = await this.htmlTemplate.getHTML(htmlPayload);
        const emailPayload: EmailDTO={
            to: [ticket.email],
            subject: "Квиток MLB",
            text: "Дякуємо за користування нашим ботом!",
            html:html
        }
        await this.emailService.sendEmail(emailPayload);


    }
}