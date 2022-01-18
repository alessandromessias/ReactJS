//fazendo os imports iniciais
import React, {Component} from "react";
import ReactDom from 'react-dom';


//criando o componente de classe
class StateNode extends Component{
    constructor(){
        super()
        this.buscandoDomNode = this.buscandoDomNode.bind(this)
    }   
    //função para buscar o DOM Node e manipula-lo
    buscandoDomNode(){
        var umaDivQualquer = document.getElementById('umaDivQualquer')
        ReactDOM.findDOMNode(umaDivQualquer).style.color ='yellow'
    }

    //renderizar a view
    render(){
        return(
            <div>
                <button className="bt" onClick={this.buscandoDomNode}>Buscando um Dom Node</button>
                <br /><br /><br />
                <div id="umaDivQualquer">
                    Este é um textp em um Node (Nó/Tag) HTML
                </div>
            </div>
        )
    }
}

//exportando

export default StateNode;