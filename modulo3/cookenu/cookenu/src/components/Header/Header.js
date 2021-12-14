import React from "react";
import {Pai, Filho} from './style'
import styled from "styled-components";
import { goToRecipes, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const Header=()=>{
    const history = useHistory()

    return(
        <Pai>
            <Filho class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button onClick={()=> goToRecipes(history)}>Navbar</button>
    <button onClick={()=> goToLogin(history)}>Login</button>
  </nav>
</Filho>
        </Pai>
    )
}
export default Header