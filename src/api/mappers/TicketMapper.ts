import {DBTicket} from "../../database/entities/DBTicket";
import {TicketResponse} from "../responses/TicketResponse";
import {HTMLData} from "../../templates/HTML/HTMLData";

export class TicketMapper {
    getTickets(tickets: DBTicket[]):TicketResponse[]{
        return tickets.map((ticket) => ({
            id: ticket.id,
            game: {
                id: ticket.game.id,
                name: ticket.game.name,
                startDate: ticket.game.startDate,
            },
            user: {
                id: ticket.user.id,
                name: ticket.user.name,
            },
            boughtAt: ticket.boughtAt,
            email: ticket.email,
            place: ticket.place,
            transaction: ticket.transaction,
        }))
    }

    getOneTicket(ticket: DBTicket):TicketResponse{
        return {
            id: ticket.id,
            game: {
                id: ticket.game.id,
                name: ticket.game.name,
                startDate: ticket.game.startDate,
            },
            user: {
                id: ticket.user.id,
                name: ticket.user.name,
            },
            boughtAt: ticket.boughtAt,
            email: ticket.email,
            place: ticket.place,
            transaction: ticket.transaction,
        }
    }

    getHtmlPayload(ticket: DBTicket):HTMLData {
        return {
            gameName: ticket.game.name,
            gameDate: ticket.game.startDate.match(/\d{4}-\d{2}-\d{2}/)[0],
            gameTime: ticket.game.startDate.match(/\d{2}:\d{2}/)[0],
            place: ticket.place,
            state: ticket.game.venueState,
            city: ticket.game.venueCity,
            location: ticket.game.venueFullName,
            QRImageSrc: `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${ticket.transaction}`
        }
    }
}