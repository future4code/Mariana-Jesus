import express, { Request, Response } from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.listen(3003, () => console.log('Entrou'))


//1

app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send('pong')
})


//2 - 3

type TODO = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const todo: TODO[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 3,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 4,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 2,
        "id": 5,
        "title": " expedita consequatur ",
        "completed": true
    },
]


//4

app.get('/todo', (req: Request, res: Response) => {
    const copia = todo.filter((boo) => {
        if (boo.completed === true) {
            return boo
        }
    })
    res.status(200).send(copia)
})


//8

app.get('/todo/:userId/lista', (req: Request, res: Response) => {
    const idTo = Number(req.params.userId)
    if (!idTo) {
        return res
            .status(400)
            .send('ID não encontrado');
    }
    const copia = todo.filter((boo) => {
        if (boo.userId === idTo) {
            return boo
        }
    })
    res.status(200).send({ copia, message: 'Tarefas do usuário' })
})


//5

app.post('/todo', (req: Request, res: Response) => {
    const { userId, id, title, completed } = req.body
    const newTodo: TODO = { userId, id, title, completed }
    todo.push(newTodo)
    if (!userId || !id || !title || !completed) {
        return res
            .status(400)
            .send('Está faltando algo');
    }
    res.status(200).send({ todo, message: 'Criado com sucesso' })
})



//6

app.put('/todo/:id', (req: Request, res: Response) => {
    const idTo = Number(req.params.id)
    if (!idTo) {
        return res
            .status(400)
            .send('ID não encontrado');
    }

    for (let i = 0; i < todo.length; i++) {
        if (todo[i].id === idTo) {
            todo[i].completed = !todo[i].completed
        }
    }

    res.status(200).send({ todo, message: 'Mudança feita' })
})



//7

app.delete('/todo/:id', (req: Request, res: Response) => {
    const idTo = Number(req.params.id)
    if (!idTo) {
        return res
            .status(400)
            .send('ID não encontrado');
    }

    const find = todo.findIndex((to) => {
        return to.id === idTo
    })
    let newTodo2 = todo.splice(find, 1)

    res.status(200).send({ todo, message: 'Sucesso ao excluir!' })
})

