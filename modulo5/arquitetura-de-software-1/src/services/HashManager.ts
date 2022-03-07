import bcrypt from "bcryptjs"
import { config } from "dotenv"

config()

export class HashManager {
    hash = (plainText: string):string => {
        const rounds = Number(process.env.COST)
        const salt = bcrypt.genSaltSync(rounds)
        const result = bcrypt.hashSync(plainText, salt)
        return result
    }

    compare = (plainText: string, databasePassword: string) => {
        const result = bcrypt.compareSync(plainText, databasePassword)
        return result
    }
}