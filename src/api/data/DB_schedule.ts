import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function DBgetSchedule(year: string, month: string, day: string) {
    const schedule = await prisma.schedule.findFirst({
        where: {
            date: `${year}-${month}-${day}`
        },
        include:{
            games: {
                select: {
                    name: true,
                    homeTeam: true,
                    awayTeam: true,
                    venueFullName: true,
                    venueCity: true,
                    venueState: true,
                    ticketsPrice: true,
                    ticketsAvailable: true,
                    startDate: true
                }
            }
        }
    });
    return schedule;
}

async function DBcreateSchedule(year: string, month: string, day: string, games: any) {
    const schedule = await prisma.schedule.create({
        // @ts-ignore
        data: {
            date: `${year}-${month}-${day}`,
            games: {
                createMany: {
                    data: games
                }
            }
        }
});
    return schedule;
}

export async function DBupdateSchedule(id: number) {
    const schedule = await prisma.schedule.update({
        where: {id: id},
        data: {
            updatedAt: new Date()
        }
    });
    return schedule;
}


export { DBgetSchedule, DBcreateSchedule};