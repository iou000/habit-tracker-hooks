import React, { memo } from 'react';

const Habit = memo((props) => {

    const handleIncrement = () => {
        props.habitIncrement(props.habit);
    }

    const handleDecrement = () => {
        props.habitDecrement(props.habit)
    }

    const handleDelete = () => {
        props.habitDelete(props.habit)
    }
    console.log(props.habit.name);

    return (
        <li className="habit">
            <span className="habit-name">{props.habit.name}</span>
            <span className="habit-count">{props.habit.count}</span>
            <button className="habitBtn habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-circle"></i>
            </button>
            <button className="habitBtn habit-decrease" onClick={handleDecrement}>
                <i className="fas fa-minus-circle"></i>
            </button>
            <button className="habitBtn habit-delete" onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
    );

});

export default Habit;