import React, { useState } from 'react'

const Hook = () => {
    let [name ,setname]=useState("")
    let [city ,setcity]=useState("")

    let inputchange=(e)=>{
        console.log(e.target.value);
        setname(e.target.value)
        
    }
    <br />

    let inputchange1=(v)=>{
        console.log(v.target.value);
        setcity(v.target.value)
        
    }
    return(
        <>
        
        Enter name: <input type="text" onChange={inputchange} />
        <br />

        Your name is {name}

        <br />

         Enter city: <input type="text" onChange={inputchange1} />
        <br />

        Your City name is {city}





        </>
        
        
    )











}
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

export default Hook

//propes, router ,tailwindcss , hooks(usestates)