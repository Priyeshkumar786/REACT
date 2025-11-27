import React from 'react'
import Child from "./Child"

const App= () => {



    // let myinfo={name:"Priyesh",
    //     age:23,
    //     city:"Bhopal"

    
  return (
    <>
      
      {/* <h1>Hello world</h1> */}
      {/* <Child mydata={myinfo}/> */}

      <Child img='vite.svg' h3="img2" price="600"/>
      <Child img='cam.jpeg' h3="img3" price="300"/>

    </>                                 //rafce syntax of react
  )
  }


export default App
