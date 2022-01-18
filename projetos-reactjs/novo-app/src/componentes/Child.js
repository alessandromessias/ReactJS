//importando os recursos necessários
import React, {Component} from "react";

//criar o componente-filho
class Child extends Component{
    render(){
        return(
            <div>
                <h3>Eu sou o componente-filho!</h3>
                <h4>{this.props.Title}</h4>
            </div>
        );
    }
}
//exportando

export default Child;