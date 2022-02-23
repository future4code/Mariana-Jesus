import express from "express";
import cors from 'cors'
import { AddressInfo } from "net";
import createUser from './endpoints/createUser'
import {getUser} from './endpoints/getUser'
import {loginUser} from './endpoints/loginUser'

const app = express();

app.use(express.json());
app.use(cors())

app.post("/user/signup", createUser)
app.post("/user/profile", getUser)
app.post("/user/login", loginUser)




const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})