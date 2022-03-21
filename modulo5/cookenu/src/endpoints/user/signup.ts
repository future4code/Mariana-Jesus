import { Request, Response } from "express";
import {connection} from "../../data/connection";
import { generateToken } from "../../services/Authenticator";
import { generateHash } from "../../services/HashGenerator";
import generateId from "../../services/IdGenerator";

export default async function signup(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { name, email, password } = req.body;

        if( !name || !email || !password ){
            res.statusCode = 422
            throw new Error("'name', 'email' and 'password' required");
        };

        if ( password.length <6 ) {
            res.statusCode = 422
            throw new Error("'password' must be at least 6 characters long")
        };

        const [user] = await connection('userName')
            .where({email})

        if(user){
            res.statusCode = 409;
            throw new Error("Email já existente")
        };

        const id:string = generateId()

        const cypherPassword: string = generateHash(password);

        await connection('userName')
            .insert({id, name, email, password: cypherPassword})

        const token:string = generateToken({id})
        
        res.send({token})

    } catch (error: any) {
        if(res.statusCode === 200){
            res.status(500).send("Erro inesperado");
        } else {
            res.send(error.message)
        }
    }
}