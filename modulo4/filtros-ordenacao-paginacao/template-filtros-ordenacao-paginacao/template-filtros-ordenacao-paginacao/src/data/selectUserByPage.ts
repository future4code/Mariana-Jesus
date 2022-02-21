import {connection} from "./connection";

export default async function selectUsersByPage(
    size: number,
    offset:number
):Promise<any> {
    const result = await connection("aula49_users")
        .limit(size)
        .offset(offset)
 
    return result;
}