import * as jwt from "jsonwebtoken";
import knex from "knex";
import dotenv from "dotenv";
import {AuthenticationData} from './types'

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

export const userTable = "User";


	export const getUserById = async(id: string): Promise<any> => {
		const result = await connection
		  .select("*")
		  .from(userTable)
		  .where({ id });
	
		return result[0];
	  }

	  export const getUserByEmail = async (email: string): Promise<any> => {
		const result = await connection
			.select("*")
			.from(userTable)
			.where({ email });
	
		return result[0];
	} 
	

		
		export const getData = (
			key: string
			): AuthenticationData => {
			const payload = jwt.verify(key, process.env.JWT_KEY as string) as any
			const result = {
				id: payload.id,
				role: payload.role
			}
			return result;
		  }
