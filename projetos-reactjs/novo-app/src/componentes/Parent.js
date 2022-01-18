//importando os recursos necessários
import React, {Component} from 'react';
import Child from './Child';
//import Child './Child';
import DemoFunc from './DemoFunc';
//criando o componente de classe
class Parent extends Component{
    //vamos criar nosso método render
    render(){
        return(
            <div>
                <h2>Eu sou o componente-pai</h2>
                <Child Title ="Sou um texto descrito dentro do componente-pai" />
                <DemoFunc Title = "Texto para vincular - via props - para o componente funcional!" />
            </div>
        );
    }
}
//exportando
export default Parent;