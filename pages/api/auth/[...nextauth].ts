import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "../../../db/PrismaClient"


export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {

            },
            async authorize(credentials, req) {
                const { email, password } = credentials as { email: string, password: string }
                const user = await prisma.user.findFirst({ where: { email } })
                if (user && user.password === password) {
                    return user;
                }
                throw new Error("incorrect credentials")
            }
        })
    ],
}

export default NextAuth(authOptions)