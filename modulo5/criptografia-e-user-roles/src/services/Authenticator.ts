import { AuthenticationData } from "../types";
import { JwtPayload, sign, verify } from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()


  export const generateToken = (
    payload: AuthenticationData 
  ) => {
    const token = sign(
      {
        id: payload.id,
        role: payload.role
      },

      process.env.JWT_SECRET as string,
      {expiresIn: process.env.EXPIRES_IN}
      ) 

    return token;
  }



