import './app.css';
import React, { useState } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

const App = () => {
  const [habits,setHabit] = useState(
    [ {id: 1, name: 'Reading', count: 0, },
      {id: 2, name: 'Coding', count: 0, },
      {id: 3, name: 'Game', count: 0, },
    ]
  );
  
  return (
    <>
    <Navbar />
    <Habits habits={habits}/>
    </>
  );
};

export default App;

