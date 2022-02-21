import express, { Request, Response } from "express";
import insertUser from "../data/insertUser";


export default async function createUser(req: Request, res: Response){
    try{
        //validar parametros da requisição

        if(
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ){
                res
                .status(400)
                .send('Preencha os campos "name", "nickname" e "email"')
        }

        //consultar o banco de dados

        const id: string = Date.now() + Math.random().toString()
        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        //responder/encerrar a requisição
        res.status(200).send('Usuário criado com sucesso')

    }catch(error:any){
        res.status(500).send(error.message)
    }
}