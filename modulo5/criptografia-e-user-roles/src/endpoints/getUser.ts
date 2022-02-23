import { Request, Response } from 'express'
import { connection } from '../connection';
import { getData } from '../connection';
import { getUserById } from '../connection';

export const getUser = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    try {
        const token: string = req.headers.authorization as string
        const [userResult] = await connection('User')
            .where("role", "NORMAL")

        const authData = getData(token)
        const user = await getUserById(authData.id)

        res.status(200).send({
            id: user.id,
            email: user.email
        })

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
}  