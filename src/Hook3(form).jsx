

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

 