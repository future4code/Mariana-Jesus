import express, {Request, Response} from "express";
import {usuarios} from './data'

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.listen(3003, ()=> console.log('Foi'))




app.get('/usuarios', (req:Request, res: Response)=>{

    try{
        
        res.status(200).send({message: 'Lista de usuários', usuarios})
    }
    catch(error:any){

    }
})


app.post('/usuarios', (req:Request, res: Response)=>{
    const {nome, cpf, dtNascimento} = req.body
    

    try{
    let anoAtual = 2022
    let data = dtNascimento.split('/')
    let idade = anoAtual - data[2]
        if(idade < 18){
            throw new Error('Somente 18+ pode ter uma conta')
        }
        usuarios.push({
            nome,
            cpf, 
            dtNascimento, 
            saldo: 0, 
            extrato: []
        })
        res.status(201).send({message: 'Usuário criado com sucesso', usuarios})
    }
    catch(error:any){
        switch(error.message){
            case 'Somente 18+ pode ter uma conta':
                res.status(400)
                break
            default:
                res.status(500)
        }
    }
})
