import React from "react";
import useForm from '../../hooks/useForm'
import {goToLogin} from '../../routes/coordinator'
import { useHistory } from "react-router-dom";

const SignUpPage = ()=>{
    const history = useHistory()
    const [form, onChange, clear] = useForm({username:'' ,email:'', password:''})

    const onSubmitForm = (e) =>{
        e.preventDefault()
        console.log(form)
    }
    return(
    <div>
        <h1>Sign</h1>
        <form onSubmit={onSubmitForm}>
            <input label="username"
                name="username"
                value={form.username}
                onChange={onChange}
                placeholder="Usuário"
                required
                type={'text'}
            />
        
            <input label="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="E-mail"
                required
                type={'email'}
            />
            <input label="senha"
                name="password"
                value={form.password}
                onChange={onChange}
                placeholder="Senha"
                required
                type={'password'}
            />
            <button type="submit">Cadastrar</button>
            
        </form>
    </div>
    )
}
export default SignUpPage