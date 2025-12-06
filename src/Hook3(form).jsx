

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
