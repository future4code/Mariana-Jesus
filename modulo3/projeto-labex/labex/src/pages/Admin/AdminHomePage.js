import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import {useEffect, useState} from 'react'
import {useProtect} from '../../hooks/useProtecPage'
import {Url} from '../../constants/url'
import {Card, Div, Buttons} from './style'

function AdminHomePage() {
  const [viagens, setViagens] = useState([])
  const history = useHistory()
  const goBack = ()=>{
    history.goBack()
  }
  const goToCreate = ()=>{
    history.push('/admin/trips/create')
  }

  const goToDetail = (id)=>{
    history.push(`/admin/trips/${id}`)
  }

  useEffect(()=>{
    getTrips()
  }, [viagens.length])
 
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


  const deteleTrip = (id)=>{
    axios.delete(`${Url}/trips/${id}`, {
      headers:{
        auth: localStorage.getItem('token')
      }
    }).then(res =>{
      alert('Deletado com sucesso!')
      getTrips()
    }).catch(err =>{
      console.log('Erro ao deletar', err.response.data)
    })
  }

  const copia = viagens.map((viagem)=>{
    return <Card key={viagem.id} id={viagem.id}>
              <div onClick={()=> goToDetail(viagem.id)}>
            <h1>{viagem.name}</h1>
            </div>
            <button onClick={() => deteleTrip(viagem.id)}>X</button>
            </Card>
  })


  useProtect()

  return (
    <Div >
      <h1>Área administrativa</h1>
      {copia}
      <Buttons>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToCreate}>Criar Viagem</button>
      </Buttons>
    </Div>
  );
}

export default AdminHomePage;