//importando o recurso combineReducers para "juntar" as funções
//que implementam as tarefas de criação dos itens e da lista
import {combineReducers} from 'redux';
import {ADD_TODO} from '../actions/actions';

/*
    primeira função - verificando type da action (nome)
    se tudo correr bem é executado exatamente aquilo que está em sua definição
*/
function todo(state, action){
    //verificando a action - se ela realmente existe
    switch(action.type){
        case ADD_TODO:
            return{
                id: action.id,
                text: action.text,
            }
            default:
                return state
    }
}
//vamos implementar nossa função para criar uma lista de itens
//função para criar a lista
function todos(state = [], action){
    switch(action.type){
        case ADD_TODO:
            return[
                //criando uma cópia do estado atual
                //para que, então, ele seja modificado
                ...state,
                todo(undefined, action)
            ]
            default:
                return state
    }
}

//vamos criar uma constante para receber a "junção" a partir da 
//função combineReducers

const todoApp = combineReducers({
    todos
})

//exportar nosso reducer

export default todoApp;