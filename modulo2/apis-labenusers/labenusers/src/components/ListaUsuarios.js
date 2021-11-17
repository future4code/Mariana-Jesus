import React from "react";
import axios from "axios";

export default class ListaUsuarios extends React.Component {
   
    render() {
        const usuariosLista = this.props.usuarios.map((usuario) => (
            <li key={usuario.id}>
                {usuario.name} <button onClick={this.props.deleteUsers} value={usuario.id}>X</button>

            </li>
        ))
        return (
            <div>
                <ul>{usuariosLista}</ul>
            </div>
        );
    }
}
