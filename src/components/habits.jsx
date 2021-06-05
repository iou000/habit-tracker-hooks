import React from 'react';
import Habit from './habit';

const Habits = (props) => {
        

    return (
        <ul className="habits">
            {
                props.habits.map( habit => 
                    <Habit 
                    key={habit.id}
                    habit={habit}/>
                )
            }
        </ul>


    );
};

export default Habits;