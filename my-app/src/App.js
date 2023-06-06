/*
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

*/
/*
import React from 'react';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import MyComponent from './MyComponent';

export function Home() {
  return <h1>Home Page</h1>;
}

export function About() {
  return <h1>About Page</h1>;
}

export function Contact() {
  return <h1>Contact Page</h1>;
}

export function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/component">MyComponent</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/component" element={<MyComponent/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
*/

// App.js

import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import calculatorReducer, { add, subtract, multiply, divide } from './calculator';

// Create the Redux store
const store = createStore(calculatorReducer);

// Calculator component
const Calculator = ({ result, add, subtract, multiply, divide }) => {
  const handleAdd = () => {
    const value = parseInt(prompt('Enter a number to add'));
    if (!isNaN(value)) {
      add(value);
    }
  };

  const handleSubtract = () => {
    const value = parseInt(prompt('Enter a number to subtract'));
    if (!isNaN(value)) {
      subtract(value);
    }
  };

  const handleMultiply = () => {
    const value = parseInt(prompt('Enter a number to multiply'));
    if (!isNaN(value)) {
      multiply(value);
    }
  };

  const handleDivide = () => {
    const value = parseInt(prompt('Enter a number to divide'));
    if (!isNaN(value) && value !== 0) {
      divide(value);
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <p>Result: {result}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleMultiply}>Multiply</button>
      <button onClick={handleDivide}>Divide</button>
    </div>
  );
};

// Map the state and actions to component props
const mapStateToProps = (state) => ({
  result: state.result,
});

const mapDispatchToProps = {
  add,
  subtract,
  multiply,
  divide,
};

const ConnectedCalculator = connect(mapStateToProps, mapDispatchToProps)(Calculator);

// Wrap the app with the Redux Provider
const App = () => (
  <Provider store={store}>
    <ConnectedCalculator />
  </Provider>
);

export default App;
