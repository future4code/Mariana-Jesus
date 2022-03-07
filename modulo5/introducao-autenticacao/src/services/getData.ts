import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types";
import dotenv from "dotenv";


dotenv.config();
export const getData = (token: string): authenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
    const result = {
        id: payload.id,
    }
    return result
};