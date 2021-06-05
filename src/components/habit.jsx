import React from 'react';

const Habit = (props) => {
        
    return (
        
        <li className="habit">
            <span className="habit-name">{props.habit.name}</span>
            <span className="habit-count">{props.habit.count}</span>
            <button className="habitBtn habit-increase">
                <i className="fas fa-plus-circle"></i>
            </button>
            <button className="habitBtn habit-decrease">
                <i className="fas fa-minus-circle"></i>
            </button>
            <button className="habitBtn habit-delete">
                <i className="fas fa-trash"></i>
            </button>
        </li>

    );

};

export default Habit;