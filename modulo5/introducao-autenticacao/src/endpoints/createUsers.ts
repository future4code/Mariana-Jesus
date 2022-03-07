import { Request, Response } from "express";
import { createUser } from "../data/connection";
import { user } from "../types";
import { generateId } from "../services/GenerateId";
import { generateToken } from '../services/Authentication'



// export default async function createUser(
//    req: Request,
//    res: Response
// ): Promise<void> {
//    try {

//       const { name, nickname, email, password } = req.body

//       if (!name || !nickname || !email || !password) {
//          res.statusCode = 422
//          throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
//       }

//       const [user] = await connection('to_do_list_users')
//          .where({ email })

//       if (user) {
//          res.statusCode = 409
//          throw new Error('Email já cadastrado')
//       }

//       const id: string = Date.now().toString()

//       const newUser: user = { id, name, nickname, email, password }

//       await connection('to_do_list_users')
//          .insert(newUser)

//       res.status(201).send({ newUser })

//    } catch (error:any) {

//       if (res.statusCode === 200) {
//          res.status(500).send({ message: "Internal server error" })
//       } else {
//          res.send({ message: error.message })
//       }
//    }
// }


export default async function createUsers(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Preencha os campos 'password' e 'email'");
    }

    if (!email || email.indexOf("@") === -1 || email.indexOf(".com") === -1) {
      throw new Error("Invalid email");
    }


    if (!password || password.lenght < 6) {
      throw new Error("Invalid password. The value must be at least 6 characters");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const id = generateId();

    await createUser(id, userData.email, userData.password);

    const token = generateToken({id});

    res.status(201).send({
      token
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
}