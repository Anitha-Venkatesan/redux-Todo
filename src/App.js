import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import DisplayTodo from './DisplayTodo';
import { addTodo } from './redux/todo.action';

function App() {
  return (
    <div className="App">
      <Todo />
      <DisplayTodo />
    </div>
  );
}

export default App;
