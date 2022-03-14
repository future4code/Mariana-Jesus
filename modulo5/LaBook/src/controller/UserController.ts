import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

const userBusiness = new UserBusiness()

export class UserController {

    signup = async (req: Request, res: Response) => {
        try {

            const { name, email, password } = req.body

            let message = "Success!"

            if (!name || !email || !password) {
                res.statusCode = 406
                message = '"name", "email" and "password" must be provided'
                throw new Error(message)
            }


            const token = await userBusiness.signupBusiness({ name, email, password })

            res.status(201).send({ message, token })

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message

            res.send({ message })
        }
    }

    login = async (
        req: Request,
        res: Response
    ) => {
        try {

            const { email, password } = req.body

            const token = await userBusiness.loginBusiness(email, password)

            res.status(200)
                .send({
                    message: "Usuário logado!",
                    token
                })

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}