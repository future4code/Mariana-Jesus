import axios from "axios"
import { baseURL } from "./baseURL"

//a) Ele executa todas as funções, ao invés de ser uma de cada vez.
//b) Ganha mais performance.

type user = {
	id: string;
	name: string;
	email: string;
}

const mandaNotificacoes = async (users: user[], message: string):Promise<void> => { 
    try{
        const promises = users.map(us =>{
            return axios.post(`${baseURL}/notifications`, {
                subscribedId: us.id,
                message,
              })
        })

        await Promise.all(promises)
    }catch{
        console.log('Erro inesperado')
    }
  }
  