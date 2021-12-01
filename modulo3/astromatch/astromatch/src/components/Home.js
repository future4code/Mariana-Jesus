import {useState, useEffect} from 'react'
import {url} from './constants/url'
import ImgMatch from '../img/match.png'
import styled from 'styled-components';
import Logo from '../img/astromach.png'
import Like from '../img/gostar.png'
import Deslike from '../img/nao-gosto.png'
import axios from 'axios';

const Headersty = styled.div`
    background-color: #fef5ed;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    

img{
    height: 70px;
    width: 50%;
    
}
`

const BotaoHome = styled.button`
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
    align-self: center;
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: space-around;


  img{
    width: 40px;
    height: 40px;
  }
`


export default function Home(props) {
  const [profile, setProfile] = useState({})
  const [person, setPerson] = useState(true)
  const [id, setId] = useState('')


  useEffect(()=>{
    getProfile()
  },[])

  const getProfile = ()=>{
    axios.get(`${url}person`)
    .then((res)=>{
      setProfile(res.data.profile)
      console.log(res.data.profile)
      setId(res.data.profile.id)
      console.log(res.data.profile.id)
    }).catch((err)=>{
      console.log(err.response.data)
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
      console.log(err.response.data)
    })
  }

  const novaPerson = (pessoa) =>{
    setPerson(pessoa)
    choosePerson()
  }


  return (
    <div className="App">
      <Headersty>
      <img src={Logo}/>
      <BotaoHome onClick={() => props.mudar("match")}><img src={ImgMatch}/></BotaoHome>
      </Headersty>
      <Card>
        {profile.data.photo}
      </Card>
      {novaPerson}
      <Footer>
      <img src={Like}/>
      <img src={Deslike}/>
      </Footer>
      
    </div>
  );
}