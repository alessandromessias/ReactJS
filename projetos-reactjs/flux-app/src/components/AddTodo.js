//importando os recursos necessários
import React, {Component} from "react";
import './estilos/AddTodo.css'

//criando o componente de classe
class AddTodo extends Component{
    render(){
        return(
            <div>
                <input type = "text" 
                ref = "input" />
            </div>
        )
    }
}