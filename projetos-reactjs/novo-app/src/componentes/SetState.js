//importando os recursos necessários
import React, {Component} from "react";
import './estilos/SetState.css';

//criando o componente de classe
class SetState extends Component{
    constructor(){
        super()
        this.state ={
            data:[]
        }
        //vinculando a função ao componente
        this.setStateHandler = this.setStateHandler.bind(this)

        //função manipuladora do state
        setStateHandler(){
            var item = 'mudando state -'
            var umArray = this.state.data.slice()
            umArray.setState({
                data:umArray
            })
        }
    }
}