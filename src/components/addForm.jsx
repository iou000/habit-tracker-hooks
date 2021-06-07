import React, { useRef } from 'react';

const AddForm = (props) => {
        
    const inputRef = useRef();
    const onsubmit = (e) => {
        e.preventDefault();
        props.onAdd(inputRef.current.value);
        inputRef.current.value='';
    }




    return(
        <form className="addForm" onSubmit={onsubmit}>
            <input ref={inputRef} type="text" className="habit-input" placeholder="Habit"/>
            <button className="addBtn">Add</button>
        </form>
    );

};

export default AddForm;