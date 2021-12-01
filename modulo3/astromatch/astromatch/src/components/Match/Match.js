import {useState} from 'react'
import {url} from '../constants/url'
import Logo from '../../img/astromach.png'
import styled from 'styled-components'
import ImgHome from '../../img/home.png'
import axios from 'axios'
import { useEffect } from 'react/cjs/react.development'

const Headersty = styled.div`
    background-color: #fef5ed;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;


img{
    height: 70px;
    width: 50%;
}
`

const BotaoMatch = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-style: hidden;
  background-color: transparent;

  img{
    width: 35px;
    height: 35px;
  }
`

const Card = styled.div`
  height: 29rem;
  margin-bottom: 12px;
  margin-top: 10px;
  margin-left: 8px;
  margin-right: 8px;
  box-shadow: 0 0 0.5em gray;
  border-style: hidden;
  border-radius: 10px;
  align-items: center;
`



export default function Body(props) {
  const [matches, setMatches] = useState()
  

  useEffect(()=>{
    getMatches()
  }, [])

  const getMatches = ()=>{
    axios.get(`${url}matches`)
    .then((res)=>{
      setMatches(res.data.matches)
      console.log(res.data.matches)
      // setId(res.data.id)
      // console.log(res.data.id)
      
    }).catch((err)=>{
      console.log(err.response)
    })
  
  }


  const copia = matches.map((perfil)=>{
    return <div key={perfil.id}>
          <img src={perfil.photo}/>
          <p>{perfil.name}</p>
      
    </div>
  })
  
  return (
    <div>
      <Headersty>
      <img src={Logo}/>
     <BotaoMatch onClick={() => props.mudar("body")}><img src={ImgHome}/></BotaoMatch>
     </Headersty>
     <Card>
       {copia}
     </Card>
      
    </div>
  );
}