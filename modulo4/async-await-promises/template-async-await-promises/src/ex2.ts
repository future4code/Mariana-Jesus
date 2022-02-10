import axios from "axios"
import { baseURL } from "./baseURL"

const pegaAssinantes = async ():Promise<any[]>=>{
    const resposta = await axios.get(`${baseURL}/subscribers`)
    return resposta.data
}

//a) a diferença é o async fica antes do parênteses