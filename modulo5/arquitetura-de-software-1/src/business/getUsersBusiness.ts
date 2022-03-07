import { allUsersData } from "../data/getUsersData"

export const getAllUsersBusiness = async (token:string) => {
    return await allUsersData(token)
}