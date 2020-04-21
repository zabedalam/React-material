import React from "react"

// function Greet(){
//     return <h1>Hello Alam</h1>
// }

// export const Greet=()=><h>Hello Alam</h>
const Greet=(props)=>{
   return(<div>
       <h1>Hello  {props.name} a.k.a {props.hero}</h1>
       {props.children}
   </div>
   
   )}

   //Destructuring in functional components in 2ways
//    const Greet=({name,hero})=>{
//     return(<div>
//         <h>Hello  {name} a.k.a {hero}</h>
//         {/* {props.children} */}
//     </div>
    
//     )}

    // const Greet=(props)=>{
    //     const {name,hero}=props
    //     return(<div>
    //         <h>Hello  {name} a.k.a {hero}</h>
    //         {/* {props.children} */}
    //     </div>
        
        // )}
export default Greet