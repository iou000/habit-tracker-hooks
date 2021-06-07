import './app.css';
import React, { useState } from 'react';
import { useCallback } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import AddForm from './components/addForm';

const App = () => {
  const [habits, setHabits] = useState(
    [ {id: 1, name: 'Reading', count: 0 },
      {id: 2, name: 'Coding', count: 0 },
      {id: 3, name: 'Game', count: 0 },
    ]
  );
  
  const habitIncrement = useCallback((habit) => {
    setHabits( habits =>
      habits.map(item => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      })
    );
  },[]);

  const habitDecrement = useCallback((habit) => {
    setHabits( habits =>
      habits.map(item => {
        if(habit.id === item.id){
          return {...habit, count: habit.count < 1 ? 0: habit.count -1}
        }
        else return item;
      })
    );
  },[])

  const habitDelete = useCallback((habit) => {
    setHabits( habits => 
      habits.filter(item =>  item.id !== habit.id)
      );
  },[])

  const onAdd = useCallback((value) => {
    setHabits( habits => 
      [...habits, {id: Date.now(), name: value, count: 0}]
      );
  },[])

  const onReset = useCallback(() => {
    setHabits( habits=> 
      habits.map(item => {
        if(item.count > 0){
          return {...item, count: 0}
        }
        else return item;
      })

    );
  },[])


  return (
    <>
    <Navbar 
    totalcount={habits.filter(item => item.count > 0).length}
    />
    <AddForm onAdd={onAdd}/>
    <Habits 
    habits={habits}
    habitIncrement={habitIncrement}
    habitDecrement={habitDecrement}
    habitDelete={habitDelete}  
    />
    <button className="habit-reset" onClick={onReset}>reset</button>
    </>
  );
};

export default App;

