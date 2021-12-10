import axios from 'axios';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {Url} from '../../constants/url'
import {useEffect, useState} from 'react'
import {useProtect} from '../../hooks/useProtecPage'
import styled from 'styled-components';


const Card = styled.div`
  width: 55%;
  height: auto;
  background-color: #577BC1;
  margin: 0 auto;
  border-radius: 10px;
  font-size: large;
`
const Button = styled.button`
  background-color: #FFD523;
  width: 130px;
  height: 30px;
  font-size: large;
  border: hidden;
  border-radius: 10px;
  color: #091353;
  margin: 10px;
`

const Back = styled.button`
  background-color: #091353;
  color: #FFD523;
  font-size: large;
  width: 130px;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 10px;
  border-style: hidden;
  cursor: pointer;
`


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
      console.log(res.data)
      getTripDetails()
    })
    .catch(err =>{
      console.log(err.response)
    })
  }
  const { name, description, planet, durationInDays, date } = trip


  return (
    <div className="App">
    <Card>
      <h1>Descrição de: {name}</h1>
      <p>Descrição:{description}</p>
      <p>Planeta:{planet}</p>
      <p>Duração: {durationInDays}</p>
      <p>Data: {date}</p>
      </Card>
      <Card>
        <h1>Candidatos pendentes:</h1>
       
        {candidates.map((candidate)=>{
    return(
      <div>
      <div key={candidate.id}>
              <p>Nome: {candidate.name}</p>
              <p>Profissão: {candidate.profession}</p>
              <p>Idade: {candidate.age}</p>
              <p>País: {candidate.country}</p>
              <p>{candidate.applicationText}</p>
              <Button onClick={()=>decideCandidate(candidate.id, false)}>Reprovar</Button>
              <Button onClick={()=>decideCandidate(candidate.id, true)}>Aprovar</Button>
              
            </div>
            </div>
    )
  })}
      </Card>
      <Card>
        <h1>Candidatos aprovados:</h1>
        
        {approved.map((candidate)=>{
    return(
      <div >
      <p key={candidate.id}>
      {candidate.name}</p>
      </div>
    )
  })}
      </Card>
      <Back onClick={goBack}>Voltar</Back>
    </div>
  );
}

export default TripDetailsPage;