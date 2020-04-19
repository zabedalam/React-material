import React from 'react';
import "./style.css"


// 1 approach of styling
// export default function StyleSheet() {
//   return (
//     <>
//     <h1 className="primary">Stylesheets</h1>
//     </>
//   );
// }

// 2 approach
// export default function StyleSheet(props) {
//     let className=props.primary?"primary":""
//     return (
//       <>
//       <h1 className={className}>Stylesheets</h1>
//       </>
//     );
//   }

//   if u have multiple class of CSS use template string below
// export default function StyleSheet(props) {
//     let className=props.primary?"primary":""
//     return (
//       <>
//       <h1 className={`${className} font-xl`}>Stylesheets</h1>
//       </>
//     );
//   }

//   3 approach inline css,it takes object not a string but object property must have camelcase and value string
export default function StyleSheet() {
    const heading={
        fontSize:"200px",
        color:"red"
    }
    return (
      <>
      <h1 style={heading}>Stylesheets</h1>
      </>
    );
  }

