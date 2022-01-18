// criando uma constante para receber a definição da action - o nome
export const ADD_TODO = 'ADD_TODO'

//variavel - let - para que, a cada item inserido pelo usuário, a recebe o item e o identifica com um número

let nextTodoId = 0

//função para gerar a action (ação)

export function addTodo(text){
    return{
        type:ADD_TODO,
        id: nextTodoId++,
        text
    }
}