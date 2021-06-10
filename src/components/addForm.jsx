import React, { useRef } from 'react';
import { memo } from 'react';

const AddForm = memo((props) => {
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

});

export default AddForm;