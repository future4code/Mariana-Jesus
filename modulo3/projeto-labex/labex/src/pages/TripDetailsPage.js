import axios from 'axios';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {Url} from '../constants/url'
import {useEffect, useState} from 'react'
import {useProtect} from '../hooks/useProtecPage'

function TripDetailsPage(props) {
  const [trip, setTrip] = useState({})
  const [candidates, setCandidates] = useState([])
  const [approved, setApproved] = useState([])
  const params = useParams()
  const history = useHistory()
  const goBack = ()=>{
    history.goBack()
  }

  const token = localStorage.getItem('token')

  useEffect(()=>{
    getTripDetails()
  },[])


  useProtect()
  

  const getTripDetails = () =>{
    axios.get(`${Url}/trip/${params.id}`, {
      headers:{
        auth: token
      }
    })
    .then(res=>{
      console.log(res.data.trip)
      setTrip(res.data.trip)
      setCandidates(res.data.trip.candidates)
      setApproved(res.data.trip.approved)
    }).catch(err=>{
      console.log(err.response)
    })
  }

  const decideCandidate = (id, resp)=>{
    const body = {
      approve: resp
    }
    const headers = {
      headers:{
        auth:token
      }
    }

    axios.put(`${Url}/trips/${params.id}/candidates/${id}/decide`, body, headers)
    .then(res =>{
      console.log(res)
      getTripDetails()
    })
    .catch(err =>{
      console.log(err.response)
    })
  }
  const { name, description, planet, durationInDays, date } = trip

  return (
    <div className="App">
    <div>
      <p>Nome: {name}</p>
      <p>Descrição:{description}</p>
      <p>Planeta:{planet}</p>
      <p>Duração: {durationInDays}</p>
      <p>Data: {date}</p>
      </div>
      <div>
        <h1>Candidatos pendentes:</h1>
        {candidates.map((candidate)=>{
          return(
            <div key={candidate.id}>
              <p>Nome: {candidate.name}</p>
              <p>Profissão: {candidate.profession}</p>
              <p>Idade: {candidate.age}</p>
              <p>País: {candidate.country}</p>
              <p>{candidate.applicationText}</p>
              <button onClick={()=>decideCandidate(candidate.id, 'true')}>Aprovar</button>
              <button onClick={()=>decideCandidate(candidate.id, 'false')}>Reprovar</button>
            </div>
          )
        })}
      </div>
      <div>
        <h1>Candidatos aprovados:</h1>
        {approved.map((candidate)=>{
          return(
            <ul>
              <li key={candidate.id}>{candidate.name}</li>
            </ul>
          )
        })}
      </div>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
}

export default TripDetailsPage;