import { Request, Response } from "express";
import { getUserByEmail } from "../connection";
import { hash } from "../services/generateHash";
import { generateToken } from "../services/Authenticator";


export async function loginUser(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { email, password } = req.body

        if (!email || email.indexOf("@") === -1) {
            throw new Error("Email inválido")
        }

        const user = await getUserByEmail(email)
        const passwordIsCorrect: boolean = user && new hash().compare(password, user.password)

        if (!user || !passwordIsCorrect) {
            throw new Error("Invalid password");
        }
        console.log(user.id)
        const token = generateToken({
            id: user.id,
            role: user.role
        })

        res.status(200).send({ token })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
} 