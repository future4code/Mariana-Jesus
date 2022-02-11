

import { type } from "os";
import {connection} from "./connection";

export default async function selectUserByType(
    name: string
):Promise<any> {
    const result = await connection("aula49_users")
        .where("type", "LIKE", `%${type}%`);
 
    return result;
};