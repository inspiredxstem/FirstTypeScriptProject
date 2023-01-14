import React from 'react';
import './styles.css';

const InputField = () => {
    return (
    <form className='input'>
        <input type="input" placeholder="Enter a task" className="taskInput"/>
        <button type="submit" className="taskSubmit"> Go </button>
    </form>
    )
}

export default InputField;