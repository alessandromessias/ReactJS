import React, {Component} from "react";
import React from './ConteudoUm';
import React from './ConteudoDois';

class StateProps extends Component {
    constructor () {
        super();
        this.state = {
            conteudoUm: "ConteudoUm armazenando no state..",
            conteudoDois: "ConteudoDois armazenando no state..",
        }
    }
    render(){
        return (
            <div>
                <ConteudoUm lendoConteudoUm ={this.state.conteudoUm} />                
                <ConteudoUm lendoConteudoDois ={this.state.conteudoDois} />                
            </div>
        );
    }
}
//Exportando
export default StateProps;