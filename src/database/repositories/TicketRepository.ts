import {Prisma, PrismaClient} from "@prisma/client";
import {DBTicket} from "../entities/DBTicket";

export class TicketRepository{
    constructor(private prisma = new PrismaClient()){}

    private include = {
        game: true,
        user: true,
    }

    async create(data: Prisma.TicketCreateInput): Promise<DBTicket> {
        return this.prisma.ticket.create({
            data,
            include: this.include,
        });
    }

    async findMany(userId: string): Promise<DBTicket[]> {
        return this.prisma.ticket.findMany({
                include: this.include,
                where: {
                    userId
                }
            }
        )
    }
}