//importando o conjunto de recursos necessários
import React, {Component} from "react";
import React from './TableRow'; 
import './estilos/State.css';
//criar o componente de classe
class State extends Component{
    constructor(){
        super();
        //criação do state
        this.state = {
            data:
            [
                {
                    "id":1,
                    "nome":"Fulano",
                    "Idade":"20"
                },
                {
                    "id":2,
                    "nome":"Belt",
                    "Idade":"30"
                },
                {
                    "id":3,
                    "nome":"Cic",
                    "Idade":"52"
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <table className = "configTable">
                    <thead>
                        <th>Identificação</th>
                        <th>Nome</th>
                        <th>Idade</th>
                    </thead>
                    <tbody>
                        {this.state.data.map((pessoa, i) =>
                            <TableRow key = {i}
                                novosDados =  {pessoa} />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
//criando o componente-filho
class TableRow extends Component {
    render(){
        return (
            <tr>
                <td>{this.props.novosDados.id}</td>
                <td>{this.props.novosDados.nome}</td>
                <td>{this.props.novosDados.Idade}</td>
            </tr>
        );
    }
}
//exportando
export default State;