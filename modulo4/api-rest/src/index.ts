import express, {Request, Response} from "express";
import {users} from './data'

const app = express();

app.use(express.json());

app.listen(3003, ()=> console.log('Foi'))


//1 a) Método GET
//b) ('/users')

//2 a) Através de Path Variables. Achei mais fácil.
//b) Fiz um if para validar o que o usuário colocou.

//3 a) Path Variables.

//4 a) Nada mudou, o usuário é criado normalmente.
//b) Não. Ele não foi feito para criar algo, a semântica confundiria a terceiros e até a eu do futuro. 




//2
app.get('/users/:type/type', (req:Request, res:Response)=>{
    const userType = req.params.type
try{
    if (userType !== 'ADMIN' && userType !== 'admin' && userType !== 'NORMAL' && userType !== 'normal') {
        throw new Error('Valor inválido, só aceito ADMIN OU NORMAL')
    }

    const copia = users.filter((user)=>{
        if(user.type === (userType.toUpperCase())){
            return user
        }
       
    })
    

    res.status(200).send({message: 'Lista dos usuários por tipo', copia})
}catch(error:any){
    switch(error.message){
        case 'Valor inválido, só aceito ADMIN OU NORMAL':
            res.status(422)
            break
        default:
            res.status(500)
    }
    res.send(error.message)
    }
})


//1
app.get('/users', (req:Request, res:Response)=>{
    try{
        res.status(200).send({message: 'Lista dos usuários', users})
    }catch(error){
        res.status(400).send({message: 'Tente novamente mais tarde.'})
    }
    })



//3
app.get('/users/:name', (req:Request, res:Response)=>{
    const userName:string = req.params.name as string
try{

    const copia2 = users.filter((user)=>{
        if(user.name === (userName)){
            return user
        }
    })

    if(copia2.length === 0) {
        throw new Error('Nome não encontrado')
    }

    res.status(200).send({message: 'Lista dos usuários por tipo', copia2})

}catch(error:any){
    switch(error.message){
        case 'Nome não encontrado':
            res.status(422)
            break
        default:
            res.status(500)
    }
    res.send(error.message)
    }
})



//4
app.post('/users', (req:Request, res:Response)=>{
    const {name, id, email, age} = req.body
try{
    
    if(!id || !name || !email || !age){
        throw new Error('Favor colocar todas as informações.')
    }
    users.push({
        id,
        name,
        email, 
        type: req.body.type.toUpperCase(),
        age
    })

    

    res.status(200).send({message: 'Criado com sucesso', users})
    
}catch(error:any){
    switch(error.message){
        case 'Favor seguir todos os padrões':
            res.status(422)
            break
        default:
            res.status(500)
    }
    res.send(error.message)
    }
})