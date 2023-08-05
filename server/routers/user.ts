import prisma from "../../db/PrismaClient";
import { createNextRouter, procedure } from "../server";
import z from "zod"

export const userRouter = createNextRouter({
    users: procedure.query<User[]>(() => {
        return prisma.user.findMany()
    }),
    createUser: procedure.input(
        z.object({
            name: z.string().nonempty(),
            password: z.string().nonempty(),
            email: z.string().nonempty(),
        })
    ).mutation(async ({ input }) => {
        const { name, password, email } = input;
        return prisma.user.create({
            data: {
                name,
                password,
                email,
                role: 'admin'
            }
        })
    })
})