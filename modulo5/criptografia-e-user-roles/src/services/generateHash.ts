import dotenv from 'dotenv'
import { compareSync, genSaltSync, hashSync } from "bcryptjs"

dotenv.config()


export class hash {

    create = (
        s: string):string=>{
            const rounds = Number(process.env.COST);
    const salt = genSaltSync(rounds);
    const result =  hashSync(s, salt);
    return result;
        }
    

    compare = (s: string, hash: string): boolean => {
        return compareSync(s, hash);
}
}

