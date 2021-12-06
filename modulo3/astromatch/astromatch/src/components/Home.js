import {useState, useEffect} from 'react'
import {url} from './constants/url'
import ImgMatch from '../img/match.png'
import Logo from '../img/astromach.png'
import Like from '../img/gostar.png'
import Deslike from '../img/nao-gosto.png'
import axios from 'axios';
import { Headersty, Imagem, BotaoHome, Card, Footer, Button } from './Match/style';
import React from 'react'



export default function Home(props) {
  const [profile, setProfile] = useState({})
  const [person, setPerson] = useState(false)
  const [id, setId] = useState('')

  useEffect(()=>{
    getProfile()
  },[])

  const getProfile = ()=>{
    axios.get(`${url}person`)
    .then((res)=>{
      setProfile(res.data.profile)
      setId(res.data.profile.id)
      
    }).catch((err)=>{
      alert(err.response)
      
    })

  }

  const choosePerson = ()=>{
    const body = {
      "id": id,
      "choice": person
    }
    axios.post(`${url}choose-person`, body)
    .then((res)=>{
      getProfile()
    }).catch((err)=>{
      alert(err.response.data)
    })
  }

  const match = (pessoa) =>{
    setPerson(pessoa)
    choosePerson()
  }

  return (
    <div className="App">
      <Headersty>
      <Imagem>
      <img src={Logo} alt={'imagem logo'}/>
      </Imagem>
      <BotaoHome onClick={() => props.mudar("match")}><img src={ImgMatch} alt={'imagem aba match'}/></BotaoHome>
      </Headersty>
      
        <Card>
        <img src={profile.photo} alt={profile.name}/>
        <div>
        <p>{profile.name}, {profile.age}</p>
        <p>{profile.bio}</p>
        </div>
        </Card>
      
      {match}
      <Footer>
      <Button onClick={()=>{match(false)}}><img src={Deslike} alt={'imagem deslike'}/></Button>
      <Button onClick={()=>{match(true)}}><img src={Like} alt={'imagem like'}/></Button>
      </Footer>
    </div>
  );
}