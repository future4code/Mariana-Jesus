import { Request, Response } from "express";
import {connection} from "../connection";
import { user } from "../types";
import { IdGenerated } from "../services/IdGenerated";
import { generateToken } from "../services/Authenticator";
import { hash } from "../services/generateHash";


export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { name, nickname, email, password, role } = req.body
      const id: string = IdGenerated()

      if (!name || !nickname || !email || !password || !role) {
         res.statusCode = 422
         throw new Error("Preencha todos os campos")
      }
      const [user] = await connection('User')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }
      const token = generateToken({ id, role })
      const passwordHash = new hash().create(password)

      const newUser: user = { id, name, nickname, email, password: passwordHash, role }

      await connection('User')
         .insert(newUser)

      res.status(201).send({ newUser, token })

   } catch (error: any) {
      res.status(500).send(error.message)
   }
} 