import React from "react";
import styled from "styled-components";
import { Url } from '../constants/constants'
import axios from "axios";
import useForm from '../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'



const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85vw;
    margin: 0 auto;
    background-color: #FDA65D;
    margin: 20px 0;
    margin-top: 50px;
    padding: 10px 0;
    border-radius: 10px;
    @media(min-width: 800px){
    width: 55%;
    height: 250px;
    }


    h1{
        color: white;
        font-size: 1.5rem;
        font-style: 
    }
    
    input{
        width: 75%;
        margin: 5px 0 5px 0;
        border-radius: 10px;

        @media(min-width: 800px){
        width: 65%;
    }
    }
`

const Div = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
        margin-top: 10px;
        /* color: white; */
    }
`


function LoginPage() {
    const { formulario, onChange, limpa } = useForm({ email: '', password: '' })

    const history = useHistory()
    const goBack = () => {
        history.push('/cadastro')
    }



    const login = (e) => {
        e.preventDefault()

        axios.post(`${Url}/users/login`, formulario)
            .then(res => {
                console.log('Entrou')
                console.log(res.data.token)
                localStorage.setItem('token', res.data.token)
                history.push('/')
            }).catch(err => {
                console.log(err.response)
            })
    }

    return (
        <Div>
            
            <Form onSubmit={login}>
            <h1>Login</h1>
                <Input
                focusBorderColor='orange'
                variant='outline' placeholder='Outline'
                    placeholder="Email"
                    name="email"
                    type={'email'}
                    label={'E-mail'}
                    onChange={onChange}
                    value={formulario.email}
                    require

                />

                
                    <Input
                        focusBorderColor='orange'
                        variant='outline' placeholder='Outline'
                        placeholder="Senha"
                        name="password"
                        onChange={onChange}
                        type={'password'}
                        label={'Senha'}
                        value={formulario.password}
                        required
                    />

                <Button
                    width='35%'
                    colorScheme='orange' variant='solid' rightIcon={<ArrowForwardIcon />} type="submit">Entrar</Button>

            </Form>
            <Button

                colorScheme='orange' variant='link' onClick={goBack}>Não possui cadastro? <br />Clique aqui para se cadastrar!</Button>
                
                
        </Div>
    )
}
export default LoginPage