import { connection } from "./connection";

export const deleteUserData = async (id: string): Promise<any> => {
    try{
        const result = await connection()
        .from('User_Arq')
        .where({id})
        .del()

    } catch (error){
        throw new Error ("Erro inesperado")
    }
}