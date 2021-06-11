import React from 'react';
import Habit from './habit';
import styles from '../css_module/habits.module.css'

const Habits = (props) => {
        
    
    return (
        <ul className={styles.habits}>
            {
                props.habits.map( habit => 
                    <Habit 
                    key={habit.id}
                    habit={habit}
                    habitIncrement={props.habitIncrement}
                    habitDecrement={props.habitDecrement}
                    habitDelete={props.habitDelete}
                    />
                )
            }
        </ul>
    );
};

export default Habits;