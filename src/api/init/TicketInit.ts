import {TicketController} from "../controllers/TicketController";
import {TicketMapper} from "../mappers/TicketMapper";
import {TicketService} from "../services/TicketService";
import {TicketRepository} from "../../database/repositories/TicketRepository";
import {EmailService} from "../services/EmailService";
import {HTMLTemplate} from "../../templates/HTML/HTML_Template";

const ticketRepository = new TicketRepository();
const ticketService = new TicketService(ticketRepository);
const ticketMapper = new TicketMapper();
const emailService = new EmailService();
const htmlTemplate = new HTMLTemplate();
export const ticketController = new TicketController(ticketService, ticketMapper, emailService, htmlTemplate);