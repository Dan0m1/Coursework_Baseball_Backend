import {PrismaClient} from "@prisma/client";
import {DBUser} from "../entities/DBUser";

export class UserRepository{
    constructor(private prisma = new PrismaClient()){}

    async upsertById(id: string, name: string): Promise<DBUser>{
        return this.prisma.user.upsert({
            where: {id},
            update: {name},
            create: {id, name}
        })
    }
}