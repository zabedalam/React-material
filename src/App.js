import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Greet } from './components/Greet';
// import MyComponent from "../src/components/Greet"
import Greet from "../src/components/Greet"


import Welcome from "../src/components/Welcome"
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from "./components/FunctionClick"
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from "./components/ParentComponent"
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import "../src/components/appStyle.css"
import styles from "../src/components/appStyle.module.css"
import Form from "../src/components/Form"
import LifeCycleA from './components/LifeCycleA';



function App() {
  return (
    <div className="App">
      <LifeCycleA></LifeCycleA>
      {/* <Form></Form> */}
    {/* // module style technique in css */}
    {/* <h1 className="error">error</h1>
    <h1 className={styles.success}>Success</h1> */}
      {/* 2 approach of styling */}
            {/* <StyleSheet primary={true}></StyleSheet> */}
            {/* //inline approach */}
            {/* <StyleSheet></StyleSheet> */}
      {/* 1 approach of styling */}
      {/* <StyleSheet></StyleSheet> */}
      <NameList></NameList>
      <UserGreetings></UserGreetings>
      <ParentComponent></ParentComponent>
      <EventBind></EventBind>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <Counter></Counter>
      <Message></Message>
     <Greet name={"Alam"} hero={"robinhood"}><p>I am from Bangladesh</p></Greet>
     <Greet name={"Zabed"} hero={"robinhood"}><p>I am from Denmark</p></Greet>

     {/* <MyComponent></MyComponent> */}
     {/* <Welcome name={"Alam"} hero={"robinhood"}><p>I am from Bangladesh</p></Welcome> */}
    </div>
  );
}

export default App;
