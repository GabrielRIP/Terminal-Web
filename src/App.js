import React from 'react';
import {useSelector} from 'react-redux';
import './App.css';

export default function App() {
  const exampleState = useSelector(state => state.exampleState)
  return (
    <div className="App">
      hola como estan esta es solo una prueva, para ver si funka.
      <br/>
      <h1>My name is: {exampleState.name}</h1>
      <h2>My last name is: {exampleState.lastName}</h2>
      <h3>and my email is: {exampleState.emailAddress}</h3>
    </div>
  );
}
