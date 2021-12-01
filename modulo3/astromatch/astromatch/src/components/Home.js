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
  position: relative;

  div{
    position: absolute;
    text-shadow: 0px 0px 5px gray;
    color: white;
    font-size: 20px;
    top:340px;
    font: bold;
  }

  img{
    border-radius: 10px;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`

const Button = styled.button`
  border-style: hidden;
  background-color: transparent;
  cursor: pointer;
  border-radius: 40px;
  margin-top: 15px;
  :hover{
    background-color: white;
    img{
      width: 45px;
      height: 45px;
    }
  }

  img{
    width: 38px;
    height: 38px;
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
      
      setId(res.data.profile.id)
      
    }).catch((err)=>{
      alert(err.response.data)
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
      <img src={Logo}/>
      <BotaoHome onClick={() => props.mudar("match")}><img src={ImgMatch}/></BotaoHome>
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
      <Button onClick={()=>{match(false)}}><img src={Deslike}/></Button>
      <Button onClick={()=>{match(true)}}><img src={Like}/></Button>
      
      
      </Footer>
      
    </div>
  );
}