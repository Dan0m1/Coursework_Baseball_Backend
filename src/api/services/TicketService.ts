import {TicketRepository} from "../../database/repositories/TicketRepository";
import {CreateTicketDTO} from "../../dtos/CreateTicketDTO";
import {GetAllTicketDTO} from "../../dtos/GetAllTicketDTO";
import {DBTicket} from "../../database/entities/DBTicket";

export class TicketService {
    constructor (private ticketRepository: TicketRepository) {}

    async create(body: CreateTicketDTO): Promise<DBTicket> {
        const data = {
            place: body.place,
            email: body.email,
            user: {connect: {id: body.userId}},
            game: {connect: {id: body.gameId}}
        }

        return this.ticketRepository.create(data);
    }

    async getAllByUserId(body: GetAllTicketDTO) {
        const {userId} = body;

        const tickets = await this.ticketRepository.findMany(userId);
        if(tickets == undefined || tickets.length == 0){
            throw new Error("404")
        }
        return tickets;
    }
}