//fazendo os imports necessários para criar um class component
import React, {Component} from 'react';

// criar o componente de classe - class component
class Demo extends Component{
    render(){
        return(
            <div>
                <h2>Hello Mundo ReacJS!</h2>
            </div>
        );
    }
}

//vamos exportar o componente para que os elementos do projeto o enxerguem
export default Demo;
