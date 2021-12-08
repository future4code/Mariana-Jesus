import React from 'react';
import { useHistory } from 'react-router-dom';
import {useState} from 'react'
import axios from 'axios';
import {Url} from '../constants/url'



function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


  const history = useHistory()
  const goBack = ()=>{
    history.goBack()
  }
  
  const goToAdmin = ()=>{
    history.push('/admin/trips/list')
  }


  const onChangeEmail = (event) =>{
    setEmail(event.target.value)
    
  }

  const onChangeSenha = (event) =>{
    setSenha(event.target.value)
    
  }

  const enviar = () =>{
    const body = {
      email: email,
      password: senha
    }

    axios.post(`${Url}/login`, body)
    .then((res)=>{
      console.log('Entrou')
      localStorage.setItem('token', res.data.token)
      history.push('/admin/trips/list')
    }).catch((err)=>{
      console.log(err.response)
    })
  }

  return (
    <div className="App">
      <p>Login</p>
      <input placeholder='email' type='email' onChange={onChangeEmail}></input>
      <input placeholder='senha' type='password' onChange={onChangeSenha}></input>
      <button onClick={goBack}>Voltar</button>
      <button onClick={enviar}>Login</button>
    </div>
  );
}

export default LoginPage;