import styled from 'styled-components';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import {Url} from '../constants/url'
import {useEffect, useState} from 'react'


const Card = styled.div`
  border: 1px solid;
  width: 50%;
  height: auto;
  margin: 0 auto;
  margin-top: 15px;
  
`

export const Back = styled.div`
  
  bottom: -80px;
  margin: 0 auto;
  width: 50%;
  /* height: 400px; */
  border-radius: 50px;
  background-color: #FFD523;
  margin-top: 70px;
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
    <Back>
    {copia}
    </Back>
      
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToForm}>Formulário</button>
    </div>
  );
}

export default ListTripsPage;