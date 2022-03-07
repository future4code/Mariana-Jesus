import { Request, Response } from "express"
import { loginBusiness } from "../business/loginBusiness"

export const login = async(req:Request, res:Response) => {
    try{

        const {email, password} = req.body

        const token = await loginBusiness({ email, password}) 

        res.status(201).send({token}) 
    }catch (error) {
        res.status(400).send('Login failed')
    }
}