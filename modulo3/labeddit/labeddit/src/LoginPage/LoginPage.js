import React from "react";
import styled from "styled-components";
import {Url} from '../constants/constants'
import axios from "axios";
import useForm from '../hooks/useForm'
import {useHistory} from 'react-router-dom'


function LoginPage(){
    const {formulario, onChange, limpa} = useForm({email:'', password:''})

    const history = useHistory()
    const goBack = ()=>{
        history.push('/cadastro')
    }

    const login = (e)=>{
        e.preventDefault()

        axios.post(`${Url}/users/login`, formulario)
        .then(res =>{
            console.log('Entrou')
            console.log(res.data.token)
            localStorage.setItem('token', res.data.token)
            history.push('/')
        }).catch(err =>{
            console.log(err.response)
        })
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input
                    placeholder="email"
                    name="email"
                    type={'text'}
                    onChange={onChange}
                    value={formulario.email}
                    require

                />
                <input
                    placeholder="senha"
                    name="password"
                    onChange={onChange}
                    type={'password'}
                    value={formulario.password}
                    required
                />
                <button type="submit">Entrar</button>
                
            </form>
            <button onClick={goBack}>Cadastrar</button>
        </div>
    )
}
export default LoginPage