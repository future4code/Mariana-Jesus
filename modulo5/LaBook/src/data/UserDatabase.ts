import { query } from "express";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
        
    private static UserTable = 'labook_users'

    async create({
        id,
        name,
        email,
        password
     }:user){

    await BaseDatabase.connection.insert({
        id,
       name,
       email,
       password
    })
    .into(UserDatabase.UserTable)
    } 

    async login (email:string){ 
        const queryResult = await BaseDatabase.connection.select("*")
        .where({ email })
       .from(UserDatabase.UserTable)

     if (!queryResult[0]) {
            throw new Error("Invalid credentials")
         }
        const user: user = {
            id: queryResult[0].id,
            name: queryResult[0].name,
            email: queryResult[0].email,
            password: queryResult[0].password
         }
            
         return user
    }
}