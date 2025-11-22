import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import LinkedInProvider from "next-auth/providers/linkedin"
import FacebookProvider from "next-auth/providers/facebook"

const prisma = new PrismaClient()

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID || "",
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET || "",
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID || "",
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
}

export const handler = NextAuth(authOptions)
