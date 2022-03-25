import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client'; 
import './App.css';

const ALL_TODOS = gql`
    query allTodos {
        todos {
            id
            texto
            completa
        }
    }`;

const ATUALIZA_TODO = gql`
    mutation completeTodo($id: uuid!, $completa: Boolean! ) {
        update_todos(where: {
            id: {_eq: $id}}, 
            _set: {completa: $completa}) {
            returning {
                id
                texto
                completa
            }
        }
    }`;

const INSERE_TODO = gql`
    mutation insertTodos($texto:String!) {
        insert_todos(objects: {texto: $texto}) {
            returning {
                id
                texto
                completa
            }
        }
    }`;

const DELETE_TODO = gql`
    mutation deleteTodos($id:uuid!) {
        delete_todos(where: {id: {_eq: $id}}) {
            returning {
                id
                texto
                completa
            }
        }
  }`;

export default function App(){
    const [todoTexto, setTodoTexto] = React.useState('');
    const { data, loading, error } = useQuery(ALL_TODOS);
    const [atualizaTodo] = useMutation(ATUALIZA_TODO);
    const [insereTodo] = useMutation(INSERE_TODO);
    const [deleteTodo] = useMutation(DELETE_TODO);

    async function handleConcluirTarefa({id, completa}){
       await atualizaTodo({ variables : { id, completa: !completa }})
    }

    async function handleInsereTodo(event){
        event.preventDefault();
        await insereTodo({
            variables: { texto: todoTexto },
            refetchQueries: [{ query: ALL_TODOS }]
        });
        setTodoTexto('');
    }

    async function handleDeleteTodo({id}){
        if(window.confirm("Deseja apagar esse ToDo?")){
            await deleteTodo({
                variables: {id},
                refetchQueries: [{ query: ALL_TODOS }]
            });
        }
    }


    if(loading) return <h1>Carregando</h1>;
    if(error) return <h1>Não foi possível pegar os dados...</h1>

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={handleInsereTodo}>
                <input type="text" placeholder='Digite a nova tarefa' value={todoTexto} onChange={(event)=>setTodoTexto(event.target.value)}/>
                <button type="submit">Salvar Tarefa</button>
            </form>
            <hr />
            { data.todos.map((todo) => 
                <div onDoubleClick={() => handleConcluirTarefa(todo)} key={todo.id}>
                    <span className={todo.completa ? 'strike' : ''}>{todo.texto}</span>
                    <button onClick={() => handleDeleteTodo(todo)}>x</button>
                </div>) }
        </div>
    );
}