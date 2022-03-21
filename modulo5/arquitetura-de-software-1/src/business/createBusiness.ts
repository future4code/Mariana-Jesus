import { insertUser } from "../data/insertData"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export const createUserBusiness = async({
    name,
    email,
    password,
    role
}:any) => {
    if(
        !name ||
        !email ||
        !password ||
        !role
    ){
        throw new Error ("Complete all the fields please!")
    }

    const newGenerator = new IdGenerator()
    const id:string = newGenerator.generateId()

    const newPassword = new HashManager()
    const hashedPassword = newPassword.hash(password);

   const tokenGen = new Authenticator()
   const token = tokenGen.generateToken

    await insertUser(
        {
            id,
            name,
            email,
            password: hashedPassword,
            role
        }
    )

    return token (
        {
            id,
            role: role
        }
    )
}