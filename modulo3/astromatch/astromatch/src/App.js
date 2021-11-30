
import {useState} from 'react'
import Body from "./components/Body";
import Match from './components/Match'
import {url} from './components/constants/url'
import axios from "axios";
import {Corpo, Header} from './components/Corpo'
import Logo from './img/astromach.png'

export default function App() {
  const [pagina, setPagina] = useState('body')
  const mudanca = (pagina)=> {setPagina(pagina)}

  const escolha = ()=>{
    switch (pagina){
      case 'body':
        return <Body mudar={mudanca}/>;
      case 'match':
        return <Match mudar={mudanca}/>;
        default:
          return <Body mudar={mudanca}/>
    }
  }

const limpa = ()=>{
  const urlLimpa = `${url}/clear`

  axios.put(urlLimpa)
  .then((res)=>{
    setPagina('home')
    alert('Lipeza efetuada!')
  })
  .catch((err)=>{
    console.log(err.response)
    // alert(err.response)
  })
}

//https://cdn-icons-png.flaticon.com/512/1077/1077909.png
//https://cdn-icons.flaticon.com/png/512/3060/premium/3060028.png?token=exp=1638232259~hmac=8a04ae6a187d72a7c4c0daeb7f52afed

  return (
    <div>
    <Corpo>
    <Header>
      <img src={Logo}/>
    </Header>
      {escolha()}
      <h1>Hello CodeSandbox</h1>
    </Corpo>
    <button onClick={()=>{limpa()}}>Limpar cachê</button>
    </div>
  );
}
