import { Request, Response } from "express";
import updateUser from "../data/updateUser";

export default async function editUser(req: Request, res: Response){
    try{
        if(
            req.body.name === "" || 
            req.body.nickname === "" || 
            req.body.email === "" 
        ){
            res.status(400).send("Nenhum dos campos pode estar em branco")
        }

        if(!req.body.name && !req.body.nickname && !req.body.email){
            res.status(400).send("Escolha ao menos um valor para alterar")
        }

        await updateUser(req.params.id, req.body.name, req.body.nickname, req.body.email)

        
        res.status(200).send("Usuário alterado com sucesso")
    }catch(error:any){
        res.status(500).send(error.message)
    }
}