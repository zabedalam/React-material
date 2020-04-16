import React from 'react';

export default function FunctionClick() {
    function clickHandler(){
        console.log("Clicked me")
    }
  return (
    <>
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
    </>
  );
}


