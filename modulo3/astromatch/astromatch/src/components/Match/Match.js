import {useState} from 'react'
import {url} from '../constants/url'
import Logo from '../../img/astromach.png'
import styled from 'styled-components'
import ImgHome from '../../img/home.png'
import axios from 'axios'
import { useEffect } from 'react/cjs/react.development'
import { Headersty, Imagem, BotaoMatch, Nav } from './style'


 const Card = styled.div`
  height: 120px;
  margin: 10px 8px 12px 8px;
  box-shadow: 0 0 0.5em gray;
  border-style: hidden;
  border-radius: 10px;
  align-items: center;
  display: flex;
  align-content: space-between;
  

  div{
    
    text-shadow: 0px 0px 5px gray;
    color: black;
    font-size: 20px;
    top:340px;
    font: bold;
  }

  img{
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 0 10px;
  }
`


export default function Body(props) {
  const [matches, setMatches] = useState([])
  
  useEffect(()=>{
    getMatches()
  }, [])

  const getMatches = ()=>{
    axios.get(`${url}matches`)
    .then((res)=>{
      setMatches(res.data.matches)
      
    }).catch((err)=>{
      console.log(err.response)
    })
  }

  const copia = matches.map((perfil)=>{
    return <Card key={perfil.id}>
          <img src={perfil.photo} alt={perfil.name}/>
          <div><p>{perfil.name}</p></div>
      
    </Card>
  })

  return (
    <div>
      <Headersty>
      <Imagem>
      <img src={Logo}/>
      </Imagem>
      
     <BotaoMatch onClick={() => props.mudar("body")}><img src={ImgHome}/></BotaoMatch>
     </Headersty>
      <Nav>
       {copia}
       </Nav>
    </div>
  );
}