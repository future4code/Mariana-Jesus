import app from "./app"
import getUsersById from './endpoints/getUsersById'
import createUser from './endpoints/createUsers'
import userLogin from "./endpoints/userLogin"

app.post('/user/signup', createUser)
app.get('/user/profile', getUsersById)
app.post('user/login', userLogin)
