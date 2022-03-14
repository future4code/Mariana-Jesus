import { Request, Response}  from "express"
import { generateToken } from "../services/authentication"
import { generateId } from "../services/generateId"
import { compare, hash } from "../services/hashManager"
import { UserDatabase } from "../data/UserDatabase"
import {user} from "../model/user"

const userDatabase = new UserDatabase()

export class UserBusiness {

    signupBusiness = async ({ name, email, password }:any):Promise<any> => {

         const id: string = generateId()
   
         const cypherPassword:string = await hash(password);
   
         const newUser = { id, name, email, password:cypherPassword}
          
         await userDatabase.create(newUser)
        
         const token: string = generateToken({ id })
          
         return token
    }

    loginBusiness = async (
      email: string,
      password: string
  ) => {

      if (!email || !password) {
          throw new Error("Preencha todos os campos")
      }
console.log(`busines`,email, password)
      const user: user = await userDatabase.login(email)
      if (!user) {
          throw new Error("Usuário não encontrado")
      }

      const passwordIsCorrect: boolean = await compare(password, user.password)

      if (!passwordIsCorrect) {
          throw new Error("Senha incorreta")
      }

      const token: string = generateToken({ id: user.id })

      return token

  }
}