export class TicketResponse {
    id: number;
    game: {
        id: string;
        name: string;
        startDate: string;
    }
    user: {
        id: string;
        name: string;
    }
    boughtAt: Date | string;
    email: string;
    place: string;
    transaction: string;
}