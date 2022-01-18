//importando os recursos necessários
import React, {Component} from "react";

//criando o componente
class conteudoUm extends Component {
    //renderização
    render(){
        return(
            <div> 
                <h2>{this.props.lendoconteudoUm}</h2>
                </div>
            );         
        }
}
//exportando

export default conteudoUm;