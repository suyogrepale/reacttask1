// calculator.js

// Initial state
const initialState = {
    result: 0,
  };
  
  // Action types
  const ADD = 'ADD';
  const SUBTRACT = 'SUBTRACT';
  const MULTIPLY = 'MULTIPLY';
  const DIVIDE = 'DIVIDE';
  
  // Action creators
  export const add = (value) => ({
    type: ADD,
    payload: value,
  });
  
  export const subtract = (value) => ({
    type: SUBTRACT,
    payload: value,
  });
  
  export const multiply = (value) => ({
    type: MULTIPLY,
    payload: value,
  });
  
  export const divide = (value) => ({
    type: DIVIDE,
    payload: value,
  });
  
  // Reducer
  const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD:
        return {
          ...state,
          result: state.result + action.payload,
        };
      case SUBTRACT:
        return {
          ...state,
          result: state.result - action.payload,
        };
      case MULTIPLY:
        return {
          ...state,
          result: state.result * action.payload,
        };
      case DIVIDE:
        return {
          ...state,
          result: state.result / action.payload,
        };
      default:
        return state;
    }
  };
  
  export default calculatorReducer;
  