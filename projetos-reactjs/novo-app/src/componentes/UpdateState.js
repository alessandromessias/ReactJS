//importando os recursos necessários
import React, {Component} from 'react';
import './estilos/UpdateState.css';

//criar o componente de classe
class UpdateState extends Component{
    constructor(){
        super()

        this.forcandoAtualizar = this.forcandoAtualizar.bind(this)
   }

   //função para forçar a atualização do componente
   forcandoAtualizar(){
       this.forceUpdate()
   }

   //renderizar a view
   render(){
       return(
           <div>
               <button className='bt' onClick={this.forcandoAtualizar}>Forçando Atualizar</button>
               <p>Valores e atualização randômicos:{Math.random()}</p>
           </div>
       )
   }
}

//exportando
export default UpdateState;