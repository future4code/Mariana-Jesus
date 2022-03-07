import { getUserByEmail } from "../data/getData"
import { HashManager } from "../services/HashManager"

export const loginBusiness = async({email, password}:any) => {
    if(
        !email ||
        !password
    ){
        throw new Error ('Complete all the fields please')
    }

    const [user] = await getUserByEmail(email)

    const manageH = new HashManager()
    const correctPassword: boolean = manageH.compare(password, user.password)

    if(!correctPassword){
        throw new Error('Invalid password')
    }
}