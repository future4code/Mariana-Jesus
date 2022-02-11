import { Request, Response } from "express"
import selectUserByOrder from '../data/selectUserByOrder'



export const getUserByOrder = async(req: Request,res: Response): Promise<void> =>{
    try {
      let order: string = req.query.order as string;
     let sort: string = req.query.sort as string;

        order = order.toLocaleUpperCase() === 'DESC' ? 'DESC' : 'ASC';
        sort = sort.toLocaleLowerCase() === 'name' ? 'name' : sort.toLocaleLowerCase() === 'type'? 'type' : 'email';

      const users = await selectUserByOrder(order, sort);

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