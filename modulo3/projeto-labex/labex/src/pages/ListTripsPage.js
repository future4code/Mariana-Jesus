import styled from 'styled-components';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import {Url} from '../constants/url'
import {useEffect, useState} from 'react'


const Card = styled.div`
  width: 60%;
  height: auto;
  margin: 0 auto;
  margin-top: 15px;
  box-shadow: 0 0 1em blue;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Back = styled.div`
  
  bottom: -80px;
  margin: 0 auto;
  width: 40%;
  border-radius: 50px;
  background-color: #FFD523;
  margin-top: 70px;
  padding-top: 15px;
  padding-bottom: 15px;
`
const Buttons = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 30px 0;
  align-content: space-between;
  align-items: center;
  width: 30%;
  justify-content: space-around;
`

const Button = styled.button`
  
  height: 35px;
  cursor: pointer;
  width: 150px;
  font-size: large;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 10px;
  border-style: hidden;
  color: #FFD523;
  background-color: #091353;
`


function ListTripsPage() {

  const history = useHistory()
  const goBack = ()=>{
    history.goBack()
  }
  const goToForm = ()=>{
    history.push('/trips/form')
  }

  const [viagens, setViagens] = useState([])

  useEffect(()=>{
    getTrips()
  }, [])
 
  const getTrips = ()=>{
    axios.get(`${Url}/trips`)
    .then((res)=>{
      setViagens(res.data.trips)
      console.log(res.data.trips)
    })
    .catch((err)=>{
      console.log(err.response)
    })
  }

  const copia = viagens.map((viagem)=>{
    return <Card key={viagem.id}>
            <h1>{viagem.name}</h1>
            <p>{viagem.description}</p>
            <p>{viagem.planet}</p>
            <p>{viagem.date}</p>
            </Card>
  })

  return (
    <div>
    <Buttons>
      <div>
      <Button onClick={goBack}>Voltar</Button>
      </div>
      <div>
      <Button onClick={goToForm}>Formulário</Button>
      </div>
      </Buttons>
    <Back>
    {copia}
    </Back>
      
    </div>
  );
}

export default ListTripsPage;