import {useHistory} from 'react-router-dom'
import axios from 'axios';
import {Url} from '../../constants/url'
import {useEffect, useState} from 'react'
import {Card, Button, Buttons} from './style'




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
    <div>
    {copia}
    </div>
      
    </div>
  );
}

export default ListTripsPage;