import React, { useRef } from 'react';
import { memo } from 'react';
import styles from '../css_module/addForm.module.css'

const AddForm = memo((props) => {
    const inputRef = useRef();
    const onsubmit = (e) => {
        e.preventDefault();
        props.onAdd(inputRef.current.value);
        inputRef.current.value='';
    }




    return(
        <form className={styles.addForm} onSubmit={onsubmit}>
            <input ref={inputRef} type="text" className={styles.input} placeholder="Habit"/>
            <button className={styles.addBtn}>Add</button>
        </form>
    );

});

export default AddForm;