import { Request, Response } from "express";
import { connection, getUserByEmail} from "../connection";
import { hash, compare } from "../services/generateHash";
import { Authenticator } from "../services/Authenticator";




export default async function loginUser (req: Request, res: Response) {
    try {
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
      const user = await getUserByEmail(userData.email);
  
      const compareResult = await compare(
        userData.password,
        user.password
      );
  
      if (!compareResult) {
        throw new Error("Invalid password");
      }
  
      const token = generateToken({
        id: user.id    
      });
  
      res.status(200).send({
        token,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  }