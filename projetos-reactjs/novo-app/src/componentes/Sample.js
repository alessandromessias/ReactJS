// importando os recursos necessários
import React, {Component} from "react";

//criar o componente de classe
class Sample extends Component{
    //criando objeto literal para servir de state original da aplicação
    state = {
        texto: 'Este é o representante do original state do componente'
    }
    //aqui, vamos criar o manipulador do estado componente
    manipuladorState = () =>{
        //fazendo uso da função auxiliar log()
        console.log('Botão clicado!')
        //especificando o manipulador setState
        this.setState({
            texto: 'Você acaba de alterar o estado original do componente!'
        })
        console.log('Estou abaixo do setState')
    }
    //renderizando a view
    render(){
        return(
            <div>
                <h1>{this.state.texto}</h1>
                <br /><br />
                <button onClick = {this.manipuladorState}>Clique aqui!
                </button>
            </div>
        );
    }
}

//exportando
export default Sample;