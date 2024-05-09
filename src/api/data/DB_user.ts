import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function DBupsertUser(id: number, name: string) {
    const user = await prisma.user.upsert({
        update: {name: name},
        create: {
            id: id,
            name: name},
        where: {id: id}
    });

    console.log(user.id, typeof(user.id), user.name);
}