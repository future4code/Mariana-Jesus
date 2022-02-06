import express, { Request, Response } from "express";
import getUserById from "./endpoints/getByid";
import editUser from "./endpoints/editUser";
import createUser from "./endpoints/createUser";
import createTask from "./endpoints/createTaskes";

const app = express();

app.use(express.json());

app.put('/user', createUser)

app.get('/user/:id', getUserById)

app.post('/user/edit/:id', editUser)

app.put('/task', createTask)

app.listen(3003, ()=>{
  console.log('Foi')
})