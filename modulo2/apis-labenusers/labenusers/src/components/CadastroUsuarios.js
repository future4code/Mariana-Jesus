import React from "react";
import axios from "axios";

export default class ListaUsuarios extends React.Component {
    render() {
        return (
            <div>
                
                <input
                    placeholder={"Nome"}
                    onChange={this.props.onChangeValueName}
                />
                <input
                    placeholder={"Email"}
                    onChange={this.props.onChangeValueEmail}
                />

                <button onClick={this.props.createUser}>Criar Usuário</button>
            </div>
        )
    }
}