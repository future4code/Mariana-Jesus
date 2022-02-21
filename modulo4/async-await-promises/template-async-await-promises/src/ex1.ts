import axios from "axios"
import { baseURL } from "./baseURL"
//a) get
//b) Através da Promise, colocando um any


async function pegaAssinantes():Promise<any[]>{
    const resposta = await axios.get(`${baseURL}/subscribers`)
    return resposta.data
}
