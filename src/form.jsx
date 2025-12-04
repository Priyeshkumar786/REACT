import React, { useState } from 'react'

export const Form = () => {
    let [name,setname]=useState('')
    let [email,setemail]=useState('')

    let Handlesubmit=(e)=>{
        e.preventDefault() //stops the form reloading
        console.log(name,email)
    }
  return (