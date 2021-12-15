import React from "react"
import styled from "styled-components"
import axios from 'axios'
import {Url} from '../constants/constants'
import {useHistory} from 'react-router-dom'
import useForm from "../hooks/useForm"


function CadastroPage(){
    const {formulario, onChange, limpa} = useForm({username:'' ,email:'', password:''})

    const history = useHistory()
    const goBack = ()=>{
        history.push('/login')
    }

    const cadastra = (e)=>{
        e.preventDefault()

        axios.post(`${Url}/users/signup`, formulario)
        .then(res =>{
            alert('Cadastro realizado!')
            localStorage.setItem('token', res.data.token)
            console.log(res.data)
            history.push('/login')
            limpa()
        }).catch(err =>{
            alert('Erro', err.response.data.message)
        })
    }
    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastra}>
                <input
                    placeholder={'Nome'}
                    name={'username'}
                    value={formulario.username}
                    onChange={onChange}
                    require
                />
                <input
                    placeholder={'Email'}
                    name={'email'}
                    value={formulario.email}
                    onChange={onChange}
                    require
                />
                <input
                    placeholder={'Senha'}
                    name={'password'}
                    value={formulario.password}
                    onChange={onChange}
                    require
                />
                <button type={'submit'}>Cadastrar</button>
            </form>
        </div>
    )
}
export default CadastroPage