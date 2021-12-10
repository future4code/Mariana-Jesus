import React from 'react';
import { useHistory } from 'react-router-dom';
import { useProtect } from '../../hooks/useProtecPage'
import useGetTrip from '../../hooks/useGetTrips'
import useForm from '../../hooks/useForm'
import axios from 'axios';
import { Url } from '../../constants/url'
import {Form, Input, Select, Button, Button2} from './style'




function CreateTripPage() {
  const [trip] = useGetTrip()
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  const { formulario, onChange, limpa } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ''
  })

  useProtect()

  const createTrip = (event) => {
    event.preventDefault()

    axios.post(`${Url}/trips`, formulario, {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
      .then(res => {
        alert('Viagem criada')
        console.log(res.data)
        limpa()
      }).catch(err => {
        alert(err.response.data.message)
      })
  }

  // const allTrips = trip && trip.map((trips) => {
  //   return <option key={trips.id} value={trips.id}>
  //   <p>{trips.name}</p>
  //   <p>{trips.name}</p>
  //   <p>{trips.name}</p>
  //   </option>
  // })

  

  return (
    <div className="App">
      <h1>Crie uma nova viagem!</h1>
      <Form onSubmit={createTrip}>
        <Input onChange={onChange}
          placeholder={'Nome'}
          name={'name'}
          pattern={'^.{5,}'}
          title={'Digite no mínimo 5 caracteres.'}
          type={'text'}
          value={formulario.name}
          required></Input>

        <Select
          onChange={onChange}
          name={'planet'}
          value={formulario.planet}
          required
          defaultValue={''}>

          <option value={""} disabled>Escolha um planeta</option>
          <option value={"Mercúrio"}>Mercúrio</option>
          <option value={"Vênus"}>Vênus</option>
          <option value={"Terra"}>Terra</option>
          <option value={"Marte"}>Marte</option>
          <option value={"Jupiter"}>Jupiter</option>
          <option value={"Saturno"}>Saturno</option>
          <option value={"Urano"}>Urano</option>
          <option value={"Netuno"}>Netuno</option>
          <option value={"Plutão"}>Plutão</option>
          <option value={"Outros"}>Outros</option>

        </Select>

        <Input onChange={onChange}
          placeholder={'Data'}
          name={'date'}
          type={'date'}
          min='2022-02-20'
          value={formulario.date}
          required></Input>

        <Input onChange={onChange}
          placeholder={'Descrição'}
          name={'description'}
          pattern={'^.{30,}'}
          title={'Mínimo 30 caracteres'}
          type={'text'}
          value={formulario.description}
          required></Input>

        <Input onChange={onChange}
          placeholder={'Duração em dias'}
          name={'durationInDays'}
          min={'50'}
          title={'Deve durar no mínimo 50 dias'}
          type={'number'}
          value={formulario.durationInDays}
          required></Input>
        <Button type='submit' value={'Enviar'}>Criar</Button>
      </Form>
      <Button2 onClick={goBack}>Voltar</Button2>

    </div>
  );
}

export default CreateTripPage;