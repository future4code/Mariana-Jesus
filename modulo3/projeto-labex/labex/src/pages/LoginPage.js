import React from 'react';
import { useHistory } from 'react-router-dom';
import {useState} from 'react'
import axios from 'axios';
import {Url} from '../constants/url'
import styled from 'styled-components';



const Pai = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  margin: 0 auto;
  
`

const Back = styled.div`
  bottom: 200px;
  width: 50%;
  height: 40%;
  margin: 0 auto;
  border-radius: 50px;
  background-color: #FFD523;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

const Input = styled.input`
  width: 40%;
  height: 35px;
  border-radius: 10px;
  font-size: large;
  margin-top: 10px;
`

const Button = styled.button`
  width: 35%;
  height: 40px;
  margin-top: 15px;
  cursor: pointer;
  font-size: large;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 10px;
  background-color: #091353;
  border-style: hidden;
  color: #FFD523;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  margin: 0 auto;
  margin-top: 10px;
  align-items: center;
  
`



function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


  const history = useHistory()
  const goBack = ()=>{
    history.goBack()
  }
  
  // const goToAdmin = ()=>{
  //   history.push('/admin/trips/list')
  // }


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
    <Pai>
    <Back>
      <h1>Login</h1>

      <Input placeholder='email' type='email' onChange={onChangeEmail}></Input>
      <Input placeholder='senha' type='password' onChange={onChangeSenha}></Input>
      </Back>
      <Buttons>
      <Button onClick={goBack}>Voltar</Button>
      <Button onClick={enviar}>Login</Button>
      </Buttons>
    </Pai>
  );
}

export default LoginPage;