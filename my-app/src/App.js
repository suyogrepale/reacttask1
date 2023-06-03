import React from 'react';
import ClassComponent from './ClassComponent';
import EventHandling from './EventHandling';
import Counter from './hooking';
import Timer from './timer';
import ThemeDisplay from './hooking_useContext';

function App(){
  const name = 'Suyog Repale'; 

  return(
    <div>
      <h1>Welcome to my React App</h1>
      <p>This is my functional component</p>
      <ClassComponent name={name}/>
      <EventHandling/>
      <Counter/>
      <Timer/>
      <ThemeDisplay/>
    </div>
  );
}

export default App;