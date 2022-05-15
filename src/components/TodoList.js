import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

const TodoList = () => {
    const [ todos, setTodos ] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [ todo, ...todos ];

        setTodos(newTodos);
        console.log(todo, ...todos);
    };


    const updateTodo = (id, newText) => {
        if (!newText.text || /^\s*$/.test(newText.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === id ? newText : item)));

    };
        
    const removeTodo = (id) => {
        const removeArr = [ ...todos ].filter(todo => todo.id !== id);
        // goes through the array and removes the item with the matching id

        setTodos(removeArr); // sets to the new filtered array
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    

    
        
    return (
        <div>
            <h1>What Are We Doing Today?</h1>
            <TodoForm onSubmit={ addTodo } />
            <Todo
                todos={ todos }
                completeTodo={ completeTodo }
                removeTodo={ removeTodo }
                updateTodo ={ updateTodo }
            />
        </div>
    )
}

export default TodoList