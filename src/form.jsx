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

// controlled component = jise react se controlled krte h
// controlled component = jise react se controlled krte h