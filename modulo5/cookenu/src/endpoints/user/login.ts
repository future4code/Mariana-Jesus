import { Request, Response } from "express";
import {connection} from "../../data/connection";
import { generateToken } from "../../services/Authenticator";
import { compareHash } from "../../services/HashGenerator";


export default async function login(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { email, password } = req.body;

        if( !email || !password ){
            res.statusCode = 422;
            throw new Error("Favor colocar e-mail e senha");
        };

        const [user] = await connection('userName')
            .where({email});

        const passwordIsCorrect:boolean = compareHash(password, user.password);

        if( !user || !passwordIsCorrect){
            res.statusCode = 401;
            throw new Error("Erro ao autenticar");
        };

        const token = generateToken({id: user.id});

        res.send({token});
     
    } catch (error: any) {
        if(res.statusCode === 200){
            res.status(500).send("Erro inesperado");
        } else {
            res.send(error.message)
        }
    }
}