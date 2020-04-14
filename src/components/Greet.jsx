import React from "react"

// function Greet(){
//     return <h1>Hello Alam</h1>
// }

// export const Greet=()=><h>Hello Alam</h>
const Greet=(props)=>{
   return(<div>
       <h>Hello  {props.name} a.k.a {props.hero}</h>
       {props.children}
   </div>
   
   )}


export default Greet