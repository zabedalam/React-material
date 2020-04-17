import React from 'react';

export default function ChildComponent(props) {
  return (
    <>
    {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
{/* if u wanna pass parameter */}
    <button onClick={()=>props.greetHandler("Child")}>Greet Parent</button>

    </>
  );
}
