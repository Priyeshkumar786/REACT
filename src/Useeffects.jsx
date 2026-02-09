// import { useState } from "react"
// import React, {UseEffects,useState} from  from react

// const Useeffects =(){
//     let[count,setcount] = useState(0)
//     let Inc =()=>{
//         setcount(count+1)
//     }

//     Useeffects( ()=>{
//         console.log("Running....");
        
//     } ,[])


//     return(
//         <>
        

//         <button onClick={Inc}>Increment</button>
//         count : {count}
//         </>
// )

// }


// import React from 'react'

// const Useeffects = () => {
//   return (
 
//   )
// }

// export default Useeffects


//Have to practice in web
// Have to use props
// have to add use effect 
//:+tovupdate the tables
// have to seoarate useref questions
// add More 

// const App = ()=>{
//     return(
//         const Footer3=()=>{
//     return(
//         <div>
//             <h3>Footer3</h3>
//         </div>
//     )
//     }
//     const Footer3=()=>{
//     return(
//         <div>
//             <h3>Footer3</h3>
//         </div>
//     )
// }

// export default FruitList;





// // -------------------------------


// const App = ()=>{
//     return(
//         const Footer3=()=>{
//     return(
//         <div>
//             <h3>Footer3</h3>
//         </div>
//     )
//     }
//     const Footer3=()=>{
//     return(
//         <div>
//             <h3>Footer3</h3>
//         </div>
//     )
// }

// export default FruitList;


// const App = ()=>{
//     return(
//         const Footer3=()=>{
//     return(
//         <div>
//             <h3>Footer3</h3>
//         </div>
//     )
//     }
//     const Footer3=()=>{
//     return(
//         <div>
//             <h3>Footer3</h3>
//         </div>
//     )
// }

// export default FruitList;

// const App = ()=>{
//     return(
//         const Footer3=()=>{
//     return(
//         <div>
//             <h3>Footer3</h3>
//         </div>
//     )
//     }
//     const Footer3=()=>{
//     return(
//         <div>
//             <h3>Footer3</h3>
//         </div>
//     )
// }

// export default FruitList;


// --------------------------------------------

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  let navigate=useNavigate()

  let [login,setlogin]=useState({
    myemail:"",
    mypassword:"",
  })

  let handlechange=(e)=>{
    setlogin({...login,[e.target.name]:e.target.value})
  }

  let handlesubmit=(e)=>{
    e.preventDefault() ;

    let valid=true


    if(!(login.myemail==localStorage.getItem("myemail"))){
      alert("email not registered")
      // document.querySelector('#email').focus()
      valid=false
    }

    else if(!(login.mypassword==localStorage.getItem("mypassword"))){
      alert("password does not match")
      // document.querySelector('#password').focus()
      valid=false
    }

    if(valid==true){
      alert("login successfull!")

      navigate('/')
    }
  }
  