import React from 'react';
import ClassComponent from './ClassComponent';
import EventHandling from './EventHandling';
import Counter from './hooking';
import Timer from './timer';
import ThemeDisplay from './hooking_useContext';
import NameList from './Work_Lists_Keys';
import MyComponent from './My_styles_Component';
import LoginForm from './Forms_create';

function App(){
  const name = 'Suyog Repale'; 

  return(
    <div>
      <MyComponent/>
      <LoginForm/>
      <h1>Welcome to my React App</h1>
      <p>This is my functional component</p>
      <ClassComponent name={name}/>
      <EventHandling/>
      <Counter/>
      <Timer/>
      <ThemeDisplay/>
      <NameList/>
    </div>
  );
}

export default App;