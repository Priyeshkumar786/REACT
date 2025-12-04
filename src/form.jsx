import React, { useState } from 'react'

export const Form = () => {
    let [name,setname]=useState('')
    let [email,setemail]=useState('')

    let Handlesubmit=(e)=>{
        e.preventDefault() //stops the form reloading
        console.log(name,email)
    }
  return (
    <>
    <div>Form handling</div>
    <form action="" onSubmit={Handlesubmit}>
        enter name : <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} />
        enter email : <input type="text" value={email}  onChange={(e)=>{setemail(e.target.value)}} />
        <button type='submit'>save data</button>
    </form>
    </>
  )
}

export default Form

//react has basically two components named 1. controlled and       2. uncontrolled component
// controlled component = jise react se controlled krte h
//react only knows controlled component
// to stop refreshor any reload of page we have to use predefined method named preventDefault

