import React from 'react';
import { useHistory } from 'react-router-dom';
import {useState} from 'react'
import axios from 'axios';
import {Url} from '../../constants/url'
import useForm from '../../hooks/useForm';
import {Pai, Back, Input, Button, Buttons, Form} from './style'





function LoginPage() {
  // const [form, setForm] = useState({email:'', password:''})
  const {formulario, onChange, limpa} = useForm({
    email:'', 
    password:''
  })
  const history = useHistory()
  const goBack = ()=>{
    history.goBack()
  }


  // const onChange = (event)=>{

  //   const {name, value} = event.target
  //   setForm({...form, [name]: value})
  //   // setForm({...form, [event.target.name]: event.target.value})
  // }

  const enviar = (event) =>{
    event.preventDefault()

    axios.post(`${Url}/login`, formulario)
    .then((res)=>{
      console.log('Entrou')
      localStorage.setItem('token', res.data.token)
      history.push('/admin/trips/list')
    }).catch((err)=>{
      console.log(err.response)
    })
  }

  return (
    <Pai>
    
    <Back>
    <h1>Login</h1>
      <Form onSubmit={enviar}>
      <Input placeholder='email' type='email' onChange={onChange}
      name={'email'}
      value={formulario.email}
      required
      ></Input>
      <Input placeholder='senha' type='password' onChange={onChange}
      name={'password'}
      value={formulario.password}
      pattern={'^.{6,}'}
      title='Sua senha deve ter no mínimo 6 caracteres'
      required></Input>
      
      <Buttons>
      <Button onClick={goBack}>Voltar</Button>
      <Button >Login</Button>
      </Buttons>
      </Form>
      </Back>
    </Pai>
  );
}

export default LoginPage;