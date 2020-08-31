import React from 'react';

export default function TodoForm(props){

    return (
        <form onSubmit={props.handleSubmit}>
            <label>Todo
            <input type="text" value={props.inputStr} onChange={props.changeHandler} />
            </label>
            <input type="submit" value="Add" />
        </form>
    )
}