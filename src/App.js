import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Greet } from './components/Greet';
// import MyComponent from "../src/components/Greet"
import Greet from "../src/components/Greet"


import Welcome from "../src/components/Welcome"
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Message></Message>
     <Greet name={"Alam"} hero={"robinhood"}><p>I am from Bangladesh</p></Greet>
     <Greet name={"Zabed"} hero={"robinhood"}><p>I am from Denmark</p></Greet>

     {/* <MyComponent></MyComponent> */}
     <Welcome name={"Alam"} hero={"robinhood"}><p>I am from Bangladesh</p></Welcome>
    </div>
  );
}

export default App;
