import React, { useState } from 'react'

// const Hook = () => {
//     let [name ,setname]=useState("")
//     let [city ,setcity]=useState("")

//     let inputchange=(e)=>{
//         console.log(e.target.value);
//         setname(e.target.value)
        
//     }
//     <br />

//     let inputchange1=(v)=>{
//         console.log(v.target.value);
//         setcity(v.target.value)
        
//     }
//     return(
//         <>
        
//         Enter name: <input type="text" onChange={inputchange} />
//         <br />

//         Your name is {name}

//         <br />

//          Enter city: <input type="text" onChange={inputchange1} />
//         <br />

//         Your City name is {city}





//         </>
        
        
//     )
    

// import { useState } from "react";

// function Hook() {
//   const [color, setColor] = useState("");

//   return (
//     <div>
//       <input onChange={(e) => setColor(e.target.value)} />
//       <button onClick={() => (document.body.style.background = color)}>
//         Change
//       </button>
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";

// function App() {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <input
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something"
//       />

//       <p>Characters: {text.length}</p>
//     </div>
//   );
// }

// export default App;












    // let[any variable,function]=useState(initial value)  ---------syntax of usestate

//     let [count, setcount]=useState(0)
//     let inc=()=>{
//         setcount(count+1)
//         console.log(count);
        
//     }

//     let dec=()=>{
//         setcount(count-1)
//         console.log(count);
        
//     }

//     let res=()=>{
//         setcount(0)
//         console.log(count);
        
        
//     }

//   return (
//     <>
//       <button onClick={inc}>increment</button> <br />
//       <button onClick={dec}>decrement</button> <br />
//       <button onClick={res}>reset</button>



//       <p>count: {count}</p>
//     </>
//   )
// }

// export default Hook


// =============================================================================
// const Hook = () => {
//     let [name ,setname]=useState("")
//     let [city ,setcity]=useState("")

//     let inputchange=(e)=>{
//         console.log(e.target.value);
//         setname(e.target.value)
        
//     }
//     <br />

//     let inputchange1=(v)=>{
//         console.log(v.target.value);
//         setcity(v.target.value)
        
//     }
//     return(
//         <>
        
//         Enter name: <input type="text" onChange={inputchange} />
//         <br />

//         Your name is {name}

//         <br />

//          Enter city: <input type="text" onChange={inputchange1} />
//         <br />

//         Your City name is {city}

// const Hook = () => {
//     let [name ,setname]=useState("")
//     let [city ,setcity]=useState("")

//     let inputchange=(e)=>{
//         console.log(e.target.value);
//         setname(e.target.value)
        
//     }
//     <br />

//     let inputchange1=(v)=>{
//         console.log(v.target.value);
//         setcity(v.target.value)
        
//     }
//     return(
//         <>
        
//         Enter name: <input type="text" onChange={inputchange} />
//         <br />

//         Your name is {name}

//         <br />

//          Enter city: <input type="text" onChange={inputchange1} />
//         <br />

//         Your City name is {city}