import { ExpressAuth } from "@auth/express"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Credentials from "@auth/express/providers/credentials"
import {hashPassword, verifyPassword} from './argon'
import Router from "express"

const prisma = new PrismaClient();
export const authRouter = Router();

// If your app is served through a proxy
// trust the proxy to allow us to read the `X-Forwarded-*` headers
authRouter.set('trust proxy', true);
authRouter.use('/auth{/*path}', ExpressAuth({
        providers: [
            Credentials({
                credentials: {
                    username: {
                        type: "username",
                        label: "Username",
                        placeholder: "John",
                    },
                    password: {
                        type: "password",
                        label: "Password",
                        placeholder: "*****",
                    },
                },
                authorize: async (credentials) => {
                    let user = null

                    //logic to salt and hash password
                    const pwHash = hashPassword(credentials.password);

                    //logic to verify if user exists
                    user = await verifyPassword(credentials.username, pwHash);

                    if(!user) {
                        throw new Error("Invalid credentials.")
                    }

                    return {...user, id: user.id.toString() };
                },
            }),
        ],
        adapter: PrismaAdapter(prisma)
    })
)

export default {authRouter}