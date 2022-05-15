import React, { useState, useEffect, useRef } from 'react';
// import { RiContrastDropLine } from 'react-icons/ri';

const TodoForm = (props) => {
     // props are passed from the parent component
    // const [ values, updateValues ] = useState({});
    const [ input, setInput ] = useState(props.edit ? props.edit.value : ''); // if edit is passed in, set the input to the value of the edit object


    const inputRef = useRef(null); // useRef is a hook that returns a mutable ref object

    useEffect(() => {
        inputRef.current.focus(); // focus on the input field
    }, []); // [] is a dependency array, if the array is empty, it will only run once

   // NEED TO UPDATE TO MAKE IT SO THE TODOS STAY WHEN PAGE IS REFRESHED


    
    // useEffect(() => {
    //     const prevData = window.localStorage.getItem('todos');
    //     // const parsedData = JSON.parse(prevData);
    //     const updateValues = prevData ? JSON.parse(prevData) : [];
    //     // setInput(JSON.parse(prevData));
    // //     if (parsedData) {
    // //         setInput(parsedData.text);
    // //     }
    // //     // if (parsedData) {
    // //     //     setInput(parsedData.text);
    // //     // }
    // }, []);

    // to keep persistent state so when reloading the page, the input field will be populated with the value of the edit object
    // useEffect(() => {
        // window.localStorage.setItem('todos', JSON.stringify(props.todos)); // set the local storage to the todos array
        // console.log("pp" + window.localStorage.getItem('todos'));
        // console.log(props.todos);
    // })


    const handleChange = (e) => {
        setInput(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className='todo-form' onSubmit={ handleSubmit }>
            { props.edit ? (
            <>
            <input
                type = "text"
                placeholder = "Update Todo"
                value = { input }
                name ='text'
                className ='todo-input edit'
                onChange={ handleChange }
                ref = { inputRef }
            />
            <button className='todo-button edit'>Update todo</button>
            </>)
            :
            (
            <>
            <input
                type = "text"
                placeholder = "Add a todo"
                value = { input }
                name ='text'
                className ='todo-input'
                onChange={ handleChange }
                ref = { inputRef }
            />
            <button className='todo-button'>Add todo</button>
            </>
            )
            }
        </form>
        
  )
}

export default TodoForm