import { app } from "./app";
import {getAllUsers} from './endpoints/getAllUsers'
import {getUserByType} from './endpoints/getUserByType'
import {getUserByOrder} from './endpoints/getUserByOrder'
import {getUserByPage} from './endpoints/getUserByPage'


app.get('/user', getAllUsers);
app.get('/userType/:type', getUserByType);
app.get('/user/order', getUserByOrder);
app.get('/user/page', getUserByPage);