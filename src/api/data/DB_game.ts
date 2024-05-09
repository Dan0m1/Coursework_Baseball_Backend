import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function DBupdateGame(id:number, ticketsAvailable: number) {
    await prisma.game.update({
        where: {id: id},
        data: {
            ticketsAvailable: ticketsAvailable,
        }
    });
}
