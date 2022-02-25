import { Request, Response } from "express"
import {connection} from "../../data/connection"
import { getTokenData } from "../../services/Authenticator"

export default async function getProfile(
    req: Request,
    res: Response
): Promise<void> {
    try {
    
        const token: string = req.headers.authorization!

        const tokenData = getTokenData(token)

        if(!tokenData){
            res.statusCode = 401
            throw new Error("Não autorizado")
        }

        const [user] = await connection('userName')
            .where ({ id: tokenData?.id })

        if(!user){
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

        const { id, email, name } = user

        res.send ({ id, email, name })

    } catch (error: any) {
        if(res.statusCode === 200){
            res.status(500).send("Error interno")
        } else {
            res.send(error.message)
        }
    }
}