import React from "react"
import styled from "styled-components"
import axios from 'axios'
import {Url} from '../constants/constants'
import {useHistory} from 'react-router-dom'
import useForm from "../hooks/useForm"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85vw;
    margin: 0 auto;
    background-color: #FDA65D;
    margin: 20px 0;
    padding: 10px 0;
    border-radius: 10px;

    h1{
        color: white;
        font-size: 1.5rem;
        font-style: 
    }
    
    input{
        width: 75%;
        margin: 5px 0 5px 0;
        border-radius: 7px;


        @media(min-width: 800px){
    width: 68%;
    height: 12%;
    margin: 8px 0;

    }
    }

    button{
        background: #D66922;
        cursor: pointer;
        width: 100px;
        height: 30px;
        border-radius: 10px;
        color: white;
    }

    @media(min-width: 800px){
    width: 50%;
    height: 40%;
    }
`


const Div = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    button{
        margin-top: 10px;

    }
`



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
            alert('Erro', err.response)
        })
    }
    return(
        <Div>
            
            <Form onSubmit={cadastra}>
            <h1>Cadastro</h1>
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
                    type={'email'}
                    onChange={onChange}
                    require
                />
                <input
                    placeholder={'Senha'}
                    name={'password'}
                    value={formulario.password}
                    onChange={onChange}
                    type={'password'}
                    pattern={'^.{8,}'}
                    title='Sua senha deve ter no mínimo 8 caracteres'
                    require
                />
                <button type={'submit'}>Cadastrar</button>
            </Form>
        </Div>
    )
}
export default CadastroPage