import { config } from "dotenv"
import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/types"


config()

export class Authenticator {

   public generateToken = (
      payload: authenticationData 
   ): string => {
      return jwt.sign(
         payload,
         process.env.JWT_KEY as string,
         { expiresIn: process.env.EXPIRES_IN }
      ) 
   }

   public getTokenData = (
    token: string
 ): authenticationData => {
    return jwt.verify(
       token,
       process.env.JWT_KEY as string
    ) as authenticationData
 }
}