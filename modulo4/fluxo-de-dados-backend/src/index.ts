import express, { Request, Response } from "express";
import {produtos} from './data'
import { AddressInfo } from "net";


const app = express();

app.use(express.json());

// const server = app.listen(process.env.PORT || 3003, () => {
//   if (server) {
//     const address = server.address() as AddressInfo;
//     console.log(`Server is running in http://localhost:${address.port}`);
//   } else {
//     console.error(`Failure upon starting server.`);
//   }
// })

app.listen(3003, ()=> console.log('Foi'))


//1

app.get('/test', (req:Request, res:Response)=>{
    res.status(200).send('Deu certo!')
})



//3

app.post('/produto', (req:Request, res:Response)=>{
    try{
    const {name, price} = req.body
        if(!name && !price){
            throw new Error('Campo não preenchido')
        }
        if( typeof name !== 'string'){
            throw new Error('Nome tem que ser uma string')
        }
        if(typeof price !== 'number'){
            throw new Error('Preço tem que ser um number')
        }
        if( price <= 0 ){
            throw new Error('Preço tem que ser maior que 0')
        }
    produtos.push({
        id: Date.now().toString(),
        name,
        price
    })
    res.status(200).send(produtos)
}
    catch(error: any){
        switch(error.message){
            case 'Campo não preenchido':
                res.statusCode = 422
                break
            case 'Nome tem que ser uma string':
                res.status(409)
                break
            case 'Preço tem que ser um number':
                res.status(409)
                break
            case 'Preço tem que ser maior que 0':
                res.status(409)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})




//4

app.get('/produto', (req:Request, res:Response)=>{
    res.status(200).send({message: 'Lista de produtos', produtos})
})



//5

app.put('/produto', (req:Request, res:Response)=>{
try{
    const id = req.query.id
    const {price} = req.body

    if(!price){
        throw new Error('Campo não preenchido')
    }
    
    if(typeof price !== 'number'){
        throw new Error('Preço tem que ser um number')
    }
    if( price <= 0 ){
        throw new Error('Preço tem que ser maior que 0')
    }

    let Found = false
   

    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].id === id){
            produtos[i].price = price
            Found = true
        }
    }
    if(!Found){
        throw new Error('Produto não encontrado')
    }
    res.status(200).send({message: 'Deu certo!', produtos})
}
catch(error: any){
    switch(error.message){
        case 'Campo não preenchido':
            res.statusCode = 422
            break
        case 'Preço tem que ser um number':
            res.status(409)
            break
        case 'Preço tem que ser maior que 0':
            res.status(409)
            break
        case 'Produto não encontrado':
            res.status(422)
            break
        default:
            res.status(500)
    }
    res.send(error.message)
}
})



//6

app.delete('/produto', (req:Request, res:Response)=>{
try{
    const id = req.query.id

    let Found = false
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].id === id){
            produtos.splice(i, 1)
            Found = true
        }
    }

    if(!Found){
        throw new Error('Produto não encontrado')
    }

    res.status(200).send({message: 'Deu certo!', produtos})
}

    catch(error: any){
        switch(error.message){
            case 'Produto não encontrado':
                res.status(422)
                break
            default:
                res.status( 500)
        }
        res.send(error.message)
}
})