import {Prisma, PrismaClient} from "@prisma/client";
import {DBSchedule} from "../entities/DBSchedule";

export class ScheduleRepository {
    constructor(private prisma = new PrismaClient()) {}

    private include = {
        games: true,
    }

    async findByDate(date: string):Promise<DBSchedule> {
        return this.prisma.schedule.findFirst({
            where: {date},
            include: this.include
        })
    }

    async create(data: Prisma.ScheduleCreateInput): Promise<DBSchedule> {
        return this.prisma.schedule.create({
            data,
            include: this.include,
        })
    }

    async updateById(id: number): Promise<DBSchedule> {
        return this.prisma.schedule.update({
            where: {id},
            data: {updatedAt: new Date()},
            include: this.include,
        })
    }
}