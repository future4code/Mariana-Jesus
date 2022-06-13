import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { post } from "../model/post"

const postBusiness = new PostBusiness()
export class PostController {

    create = async (req: Request, res: Response) => {
        try {

            const { photo, description, type } = req.body
            const token: string = req.headers.authorization as string

            await postBusiness.createPostBusiness({ photo, description, type, token })

            res.status(201).send({ message: `sucess` })

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({ message })
        }
    }

    getPostById = async (req: Request, res: Response) => {
        try {
            let message = "Success!"

            const { id } = req.params
            const token = req.headers.authorization

            const post = await postBusiness.getPostByIdBusiness({ id, token })

            res.status(200).send({ message, post })

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({ message })
        }
    }
}