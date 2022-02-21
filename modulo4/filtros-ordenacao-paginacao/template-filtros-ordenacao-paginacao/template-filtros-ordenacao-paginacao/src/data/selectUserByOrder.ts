

import {connection} from "./connection";

export default async function selectUserByType(
    sort:string,
    order: string
):Promise<any> {
    const result = await connection("aula49_users")
        .orderBy(sort, order);
 
    return result;
};