import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());


// app.post("/signup", async (req: Request, res: Response) => {
//     try {
//       const userData = {
//         email: req.body.email,
//         password: req.body.password
//       };
    
//       const id = generate();
  
//       const hashPassword = await hash(userData.password);
  
//       await createUser(id, userData.email, hashPassword);
  
//       const token = generateToken({
//         id
//       });
  
//       res.status(200).send({
//         token,
//       });
//     } catch (err) {
//       res.status(400).send({
//         message: err.message,
//       });
//     }
//   });




  app.post("/login",)


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})