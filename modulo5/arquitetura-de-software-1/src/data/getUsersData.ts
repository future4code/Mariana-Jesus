import { connection } from "./connection";

export const allUsersData = async (users:any = []):Promise<any> => {
    const result = await connection()
    .select("*")
    .from('User_Arq')

    for(let user of result){
        return users.push(user)
    }

}