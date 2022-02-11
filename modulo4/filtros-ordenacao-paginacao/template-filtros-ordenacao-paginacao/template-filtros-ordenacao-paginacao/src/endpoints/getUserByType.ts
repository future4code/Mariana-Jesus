import { Request, Response } from "express"
import selectUserByType from '../data/selectUserbyType'



export const getUserByType = async(req: Request,res: Response): Promise<void> =>{
    try {
      const type: string = req.params.type as string;

      const types = await selectUserByType(type);

       if(!types.length){
          res.statusCode = 404
          throw new Error("No type found")
       }
 
       res.status(200).send(types)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }