

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Hook3 = () => {

  // let[name,setname]=useState("")
  // let[email,setemail]=useState("")

  let navigate = useNavigate()

  let [form,setform]=useState({
    name :"",
    email :"",
    number :"",
    // age :"",
  })

  let handlechange=(e)=>{
setform({...form ,[e.target.name] : e.target.value})
  }

  let handlesubmit=(e)=>{


    // preventDefault stops page from reloading
    // e.preventDefault()   
    // console.log(name,email);
    e.preventDefault() ;
    console.log(form.name);

    let valid=true
    

    if(form.name.trim()==""){
      alert("name cannot be empty")
      valid=false
    }

    else if(form.email.trim()==""){
      alert("email cannot be empty")
      valid=false
    }

    else if(form.number.trim()==""){
      alert("number cannot be empty")
      valid=false
    }

    if(valid){
        alert("form submitted successfully")

        localStorage.setItem("Name",form.name)
        localStorage.setItem("Email",form.email)
        localStorage.setItem("Number",form.number)
    }
    if(form.age.length<18 ){
      alert("enter correct age")
    }

    
  }
  return (
    <>
      <h1>Form handling</h1>

      <form onSubmit={handlesubmit}>

    {/* Enter your name: <input type="text" name='name' value={form.name} onChange={(e)=>{setname(e.target.value)}} /> <br /> */}
    Enter your name: <input type="text" name='name' value={form.name} onChange={handlechange} /> <br /> <br />

    {/* Enter your  email: <input type="text" name='email' value={form.email} onChange={(e)=>{setemail(e.target.value)}} /> <br /> */}
    Enter your email: <input type="text" name='email' value={form.email} onChange={handlechange}/> <br /> <br />

    {/* Enter Number: <input type="text" name="number" value={form.number} onChange={(e)=>{setnumber(e.target.value)}} /> <br /> */}
    Enter your number: <input type="text" name='number' value={form.number} onChange={handlechange} /> <br /> <br />

    Enter your Age: <input type="text" name="age" value={form.age} onChange={handlechange} /> <br /> <br />

    <button type='submit'> save data</button>

      </form>


    </>
  )
}

export default Hook3