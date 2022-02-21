import { Request, Response } from "express"
import selectUserByPage from '../data/selectUserByPage'



export const getUserByPage = async(req: Request,res: Response): Promise<void> =>{
    try {
      let size: number = Number(req.query.size) && Number(req.query.size) > 0 ? Number(req.query.size) : 5;

      let page: number = Number(req.query.page) && Number(req.query.page) > 0 ? Number(req.query.page) : 1;

      let offset:number = size * (page -1)

      const users = await selectUserByPage(size, offset);

       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }