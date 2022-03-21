import { Request, Response } from "express";
import { getAllUsersBusiness } from "../business/getUsersBusiness";

export const getAllUsersController = async (req: Request, res: Response) => {
    try{

    const token = req.headers.authorization as string
    
    const users = await getAllUsersBusiness(token)
    res.status(200).send()
    } catch(error){
        res.send("Error")
    }
}