import React from "react";
import axios from "axios";


export default class ListaUsuarios extends React.Component {
    state = {
        nome: "",
        email: ""
    };

    inputNome = (event) => {
        this.setState({ nome: event.target.value });
    };
    inputEmail = (event) => {
        this.setState({ email: event.target.value });
    };


    fazerCadastro = async() => {
        const body = {
            name: this.state.nome,
            email: this.state.email
        };

        try{
            const resposta = await axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                body,
                {
                    headers: {
                        Authorization: "mariana-jesus-carver"
                    }
                })
                this.setState({ nome: "", email: "" });
                console.log("feito");
        }catch(err){
            alert(err.response.data.message);
        }

        }


    // fazerCadastro = () => {
    //     const body = {
    //         name: this.state.nome,
    //         email: this.state.email
    //     };

    //     axios
    //         .post(
    //             "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    //             body,
    //             {
    //                 headers: {
    //                     Authorization: "mariana-jesus-carver"
    //                 }
    //             }
    //         )
    //         .then((resposta) => {
    //             this.setState({ nome: "", email: "" });
    //             console.log("feito");
    //         })
    //         .catch((error) => {
    //             alert(error.response.data.message);
    //         });
    // };


    render() {
        return (
            <div>

                <button onClick={this.props.irParaLista}>Lista de Usuários</button>
                <h2>Cadastro</h2>

                <input
                    placeholder="Nome"
                    value={this.state.nome}
                    onChange={this.inputNome}
                />
                <input
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.inputEmail}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}