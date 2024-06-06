import {Prisma, PrismaClient} from "@prisma/client";
import {DBGame} from "../entities/DBGame";

export class GameRepository {
    constructor(private prisma = new PrismaClient()){}

    async updateById(id:string, data:Prisma.GameUpdateInput): Promise<DBGame>{
        return this.prisma.game.update({
            where: {id},
            data: data,
        })
    }

    async findById(id:string): Promise<DBGame>{
        return this.prisma.game.findFirst({
            where: {id}
        })
    }
}