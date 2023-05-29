import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../db/PrismaClient";

export default async function handle(_: NextApiRequest, response: NextApiResponse<User[]>) {
    const users = await prisma.user.findMany();
    response.status(200).json(users)
}