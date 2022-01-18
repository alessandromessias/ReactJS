import './App.css';
//fazer os imports necessários
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from './actions/actions';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

//criando o componente de classe
class App extends Component {
  //criando nosso método render
  render(){
    const{ dispatch, visibleTodos } = this.props
    return(
      <div>
        <AddTodo onAddClick = {text => dispatch(addTodo(text))} />
        <TodoList todos = {visibleTodos} />
      </div>
    );
  }
}

//criar nossa função para selecionar o estado atual da nossa store
//criada anteriormente

function select(state){
  return{
    visibleTodos:state.todos
  }
}

//vamos criar a conexão entre aquilo que está vindo da nossa store
//com aquilo que vamos exibir a partir das props do nosso arquivo
//principal

export default connect(select)(App);
