import { Request, Response } from "express";
import { deleteUserBusiness } from "../business/deleteBusiness";

export const deleteUserController = async (req: Request, res: Response) => {
    try{

    const input = {
        id: req.params.id, 
        token: req.headers.authorization as string
    }

    await deleteUserBusiness(input)

    res.status(200).send("User sucessfuly deleted")
    
    } catch(error){
        res.status(400).send("Error")
    }
}