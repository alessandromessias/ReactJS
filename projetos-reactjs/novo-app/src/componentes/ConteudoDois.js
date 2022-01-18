//importando os recursos necessários
import React, {Component} from "react";

//criando o componente
class conteudoDois extends Component{
    //renderização
    render(){
        return(
            <div> 
                <h2>{this.props.lendoConteudoDois}</h2>
                </div>
            );         
        }
}
//exportando

export default conteudoDois;
