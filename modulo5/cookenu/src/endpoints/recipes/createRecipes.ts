import { Request, Response } from "express"
import {connection} from "../../data/connection"
import { getTokenData } from "../../services/Authenticator"
import generateId from "../../services/IdGenerator"

export default async function createRecipe(
    req: Request,
    res: Response
): Promise<void>{
    try{

        const token = req.headers.authorization
        const { title, description } = req.body

        const tokenData = getTokenData(token!)

        if(!tokenData){
            res.statusCode = 401
            throw new Error("Não autorizado")
        }

        if(!title || !description){
            res.statusCode = 422
            throw new Error("Campos precisam ser preenchidos")
        }

        const id = generateId()

        await connection('recipeTableName')
            .insert({ 
                id, 
                title, 
                description,
                author_id: tokenData!.id
            })

        res.send("Receita criada com sucesso!")

    } catch (error: any) {
        if(res.statusCode === 200){
            res.status(500).send("Erro internal")
        } else {
            res.send(error.message)
        }
    }
}