import express, { Request, Response } from "express";

import { AddressInfo } from "net";
import { connection } from './connection'

const app = express();

app.use(express.json());

type bodyTask = {
    id: string,
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: string
}


app.get("/user/:id", async (req, res) => {
    try {
        const userId: any = req.params.id

        const usuario = await connection("users")
            .select()
            .where({ id: userId })

        if (usuario.length <= 0) {
            throw new Error("Usuário não encontrado")
        }
        res.status(200).send({ usuario })
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})




app.post("/user", async (req: Request, res: Response): Promise<void> => {
    let codeError = 400
    try {
        const { name, nickname, email }: { name: string, nickname: string, email: string } = req.body
        const id: string = Date.now().toString()

        if (!name || !nickname || !email) {
            codeError = 422
            throw new Error("Favor preencher todos os dados")
        }

        await connection("ToDoList")
            .insert({
                id,
                name,
                nickname,
                email
            })

        res.status(201).send("Sucesso!")

    } catch (error: any) {
        res.status(codeError).send(error.message || error.sqlMessage)
    }
})


app.post("/task", async (req, res) => {
    try {

        let data = req.body.limitDate.split("/")

        const body: bodyTask = {
            id: Date.now().toString(),
            title: req.body.title,
            description: req.body.description,
            limitDate: `${data[2]}-${data[1]}-${data[0]}`,
            creatorUserId: req.body.creator_user_id
        }

        if (req.body.title === "" || req.body.description || req.body.creatorUserId || req.body.limitDate) {
            throw new Error("Favor preencha todos os campos!")
        }

        await connection("TodoListTask")
            .insert([{ id: body.id, title: body.title, description: body.description, limitDate: body.limitDate, creatorUserId: body.creatorUserId }])

        res.status(200).send("sucesso!")

    } catch (error: any) {
        res.status(500).send(error.message)
    }
})


app.put("/editUser/:id", async (req: Request, res: Response): Promise<void> => {
    const name = req.body.name
    const nickname = req.body.nickname
    const email = req.body.email
    const id = req.params.id

    if (!name && !nickname && !email) { res.status(300).send("Favor, inserir todos os dados") }

    if (!id) { res.status(300).send("Favor adicionar o id correto") }

    try {
        await connection.raw(`UPDATE TodoListUser SET 
          name = "${name}",
          nickname = "${nickname}",
          email = "${email}"
          WHERE id = "${id}";`)

        res.status(200).send("Usuario alterado")
    } catch {
        res.status(500).send("Erro, tente mais tarde")
    }
})






const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})