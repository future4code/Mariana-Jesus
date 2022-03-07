export enum USER_ROLES{
    GUEST = "normal",
    ADMIN = "admin"
  }
  
  export interface AuthenticationData {
     id:string
     role: USER_ROLES
  }
  
export type user = {
   id: string
   name: string
   email: string
   password: string
   nickname: string
   role: USER_ROLES
}