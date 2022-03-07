import { app } from "./app"
import { getAllUsersController } from "./controller/getUsersController"
import { createUserController } from "./controller/createController"
import { login } from "./controller/loginController"
import { deleteUserController } from "./controller/deleteController"

app.get('/user', getAllUsersController)
app.post('/user/signup', createUserController)
app.post('/user/login', login)
app.delete('/user', deleteUserController)