import React, { memo } from 'react';
import styles from '../css_module/habit.module.css'

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
        <li className={styles.habit}>
            <span className={styles.name}>{props.habit.name}</span>
            <span className={styles.count}>{props.habit.count}</span>
            <button className={`${styles.habitBtn} ${styles.habitIncrease}`} onClick={handleIncrement}>
                <i className="fas fa-plus-circle"></i>
            </button>
            <button className={`${styles.habitBtn} ${styles.habitDecrease}`} onClick={handleDecrement}>
                <i className="fas fa-minus-circle"></i>
            </button>
            <button className={`${styles.habitBtn} ${styles.habitDelete}`} onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
    );

});

export default Habit;