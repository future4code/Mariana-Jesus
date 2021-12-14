import React from "react";
import useForm from '../../hooks/useForm'
import {goSignUp} from '../../routes/coordinator'
import { useHistory } from "react-router-dom";
import axios from "axios";
import {URL} from '../../constants/url'

const LoginPage = ()=>{
    const history = useHistory()
    const [form, onChange, clear] = useForm({email:'', password:''})
    const onSubmitForm = (e) =>{
        e.preventDefault()
        login()
        // console.log(form)

    }

    const login = ()=>{
        axios.post(`${URL}/user/login`, form)
        .then(res =>
            // console.log(res.data.token)
            console.log(`${URL}/users/login`)
        ).catch(err =>
            console.log(err)
        )
    }


    return(
    <div>
        <h1>Login</h1>
        <form onSubmit={onSubmitForm}>
            <input 
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="E-mail"
                required
                type={'email'}
            />
            <input 
                name="password"
                value={form.password}
                onChange={onChange}
                placeholder="Senha"
                required
                // type={'password'}
            />
            <button type="submit">Entrar</button>
            
        </form>
        <button onClick={()=> goSignUp(history)}
        type="submit">Cadastre-se</button>

    </div>
    )
}
export default LoginPage