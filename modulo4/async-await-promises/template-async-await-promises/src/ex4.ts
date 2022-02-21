import axios from "axios"
import { baseURL } from "./baseURL"


//a)put. Porque está postando;


const createNews = async (title: string, content: string, date: number):Promise<void> => { 
  const resposta = await axios.put(`${baseURL}/news`, {
    title: title,
    content: content,
    date: date
  })

}

