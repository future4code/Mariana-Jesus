import { deleteUserData } from "../data/deleteData";

export const deleteUserBusiness = async (input:{id: string, token: string}) => {
    
   const compareToken = deleteUserData(input.token)

   return await deleteUserData(input.id)

}