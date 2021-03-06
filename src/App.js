import React, { PureComponent } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { Greet } from './components/Greet';
// import MyComponent from "../src/components/Greet"
import Greet from "../src/components/Greet";

import Welcome from "../src/components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreetings from "./components/UserGreetings";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import "../src/components/appStyle.css";
import styles from "../src/components/appStyle.module.css";
import Form from "../src/components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverComponent from "./components/HoverComponent";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoveredComponentTwo from "./components/HoveredComponentTwo";
import User from "./components/User";
import CounterRenderProps from "./components/CounterRenderProps";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import HookCounter from "./components/HookCounter";

function App() {
  return (
    <div className="App">
      <HookCounter></HookCounter>
      <PostForm></PostForm>
      {/* <PostList></PostList>
      <UserProvider value='zabed'>
        <ComponentC></ComponentC>
      </UserProvider> */}

      {/* <CounterRenderProps
      // render={(count, incrementHandler) => (
      //   <ClickCounterTwo
      //     count={count}
      //     incrementHandler={incrementHandler}
      //   ></ClickCounterTwo>
      // )}
      >
        {(count, incrementHandler) => (
          <ClickCounterTwo
            count={count}
            incrementHandler={incrementHandler}
          ></ClickCounterTwo>
        )}
      </CounterRenderProps>
      <CounterRenderProps
      // render={(count, incrementHandler) => (
      //   <HoveredComponentTwo
      //     count={count}
      //     incrementHandler={incrementHandler}
      //   ></HoveredComponentTwo>
      // )}
      >
        {(count, incrementHandler) => (
          <HoveredComponentTwo
            count={count}
            incrementHandler={incrementHandler}
          ></HoveredComponentTwo>
        )}
      </CounterRenderProps> */}
      {/* <ClickCounterTwo></ClickCounterTwo>
      <HoveredComponentTwo></HoveredComponentTwo>
      <User render={(isLogged)=>isLogged?'zabed':'guest'}></User> */}
      {/* <ClickCounter name='zabed'></ClickCounter>
      <HoverComponent></HoverComponent> */}
      {/* <ErrorBoundary><Hero heroName='zabed'></Hero></ErrorBoundary>
      <ErrorBoundary><Hero heroName='zaif'></Hero></ErrorBoundary>
      <ErrorBoundary><Hero heroName='Jocker'></Hero></ErrorBoundary> */}

      {/* <FocusInput></FocusInput>
      <RefsDemo></RefsDemo>
      {/* <PureComp></PureComp> */}
      {/* <ParentComp></ParentComp>
      <LifeCycleA></LifeCycleA>
      <FragmentDemo></FragmentDemo> */}
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
      {/* <NameList></NameList>
      <UserGreetings></UserGreetings>
      <ParentComponent></ParentComponent>
      <EventBind></EventBind>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <Counter></Counter>
      <Message></Message>
     <Greet name={"Alam"} hero={"robinhood"}><p>I am from Bangladesh</p></Greet>
     <Greet name={"Zabed"} hero={"robinhood"}><p>I am from Denmark</p></Greet> */}

      {/* <MyComponent></MyComponent> */}
      {/* <Welcome name={"Alam"} hero={"robinhood"}><p>I am from Bangladesh</p></Welcome> */}
    </div>
  );
}

export default App;
