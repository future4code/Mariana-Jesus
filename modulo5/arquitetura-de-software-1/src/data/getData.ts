

import { connection } from "./connection";

export const getUserByEmail = async (email:string): Promise<any> => {
    try{
    const result = await connection()
    .select("*")
    .from('User_Arq')
    .where({email})
    if(!result[0]){
        throw new Error('Usuário não encontrado')
    }
    return {
        id:result [0].id,
        name: result[0].name,
        email: result[0].email,
        password: result[0].password,
        role: result[0].role
    }
    } catch(error){
        throw new Error('Erro inesperado')
    }
}