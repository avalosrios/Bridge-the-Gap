import * as argon2 from 'argon2'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function hashPassword (plainPassword: any) {
    try {
        const hash = await argon2.hash(plainPassword, {type: argon2.argon2i});
        return hash;
    } catch (error) {
        console.log("Error Hashing Password")
    }
}

export async function verifyPassword(username: any, plainPassword:any) {
    try {
        //Find user in prisma db
        const user = await prisma.user.findUnique({where: {username}})

        //verify that passwords match
        if(user != null && await argon2.verify(user.password, plainPassword)){
            return user;
        }
    } catch (error) {
        return null;
    }
}