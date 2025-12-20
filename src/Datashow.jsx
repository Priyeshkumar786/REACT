import axios from 'axios'
import React, { useEffect, useState } from 'react'

const on = () => {
    

  let [form,setform]=useState({
    name:"",
    age:"",
    aadhar:"",
    city:"",
    checkin:"",
    checkout:"",
    people:"",  })

    let [data,setdata]=useState([])
    let[editId,seteditId]=useState(null)
    let[search,setsearch]=useState("")

    let fetchdata=()=>{
  let api="http://localhost:3000/hotel"

  axios.get(api).then((res)=>{
    setdata(res.data)
  }) .catch((res)=>{
    console.log("error",err);
    
  })
    }

  useEffect(()=>{
    fetchdata()
  },[])

  let datadelete=(id)=>{
    let api=`http://localhost:3000/hotel/${id}`
    axios.delete(api).then(()=>{
      alert("booking cancelled")
      fetchdata()
    })
  }

  let handlechange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

  let handlesubmit=(e)=>{
    e.preventDefault()

    let api=`http://localhost:3000/hotel/${editId}`

    axios.put(api,{...form,person:500}).then(()=>{
      fetchdata()
      seteditId(null)
    })
  }

  let formopen=(e)=>{
    seteditId(e.id)
    setform({name:e.name,age:e.age,aadhar:e.aadhar,city:e.city,checkin:e.checkin,checkout:e.checkout,people:e.people})
  }

  let filterdata=data.filter((e)=>{
    return(e.name.toLowerCase().includes(search.toLowerCase())
     || e.age.toString().includes(search.toString())
  )})

  return (
    <>

    Search: <input type="text" value={search} onChange={(e)=>{setsearch(e.target.value)}} />
      <h1>data show page</h1>

      <table border={2}>
        <thead>
          <tr>

            <th>Name</th>
            <th>age</th>
            <th>city</th>
            <th>aadhar</th>
            <th>checkin</th>
            <th>checkout</th>
            <th>people</th>
            <th>total</th>
            <th>cancel</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {filterdata.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.city}</td>
              <td>{e.aadhar}</td>
              <td>{e.checkin}</td>
              <td>{e.checkout}</td>
              <td>{e.people}</td>
              <td>{e.people * e.person}</td>
              <td onClick={() => datadelete(e.id)} style={{ cursor: "pointer", color: "red" }}>
                Delete
              </td>
              <td onClick={() => formopen(e)} style={{ cursor: "pointer", color: "blue" }}>
                Edit
              </td>
            </tr>
          ))}
        </tbody>
      </table>


{/* cinditional rendering--- editId && */}
      {editId &&(
        <form onSubmit={handlesubmit}>
          enter name: <input type="text" name="name" value={form.name} onChange={handlechange} /> <br /> <br />

          enter age: <input type="text" name="age" value={form.age} onChange={handlechange} /> <br /> <br />

          enter aadhar: <input type="text" name="aadhar" value={form.aadhar} onChange={handlechange} /> <br /> <br />

          select city
      <select name="city" value={form.city} onChange={handlechange}> <br />
        <option value="bhopal">bhopal</option>
        <option value="indore">indore</option>
        <option value="jabalpur">jabalpur</option>
        <option value="satna">satna</option>
      </select>

      enter checkin: <input type="date" name="checkin" value={form.checkin} onChange={handlechange} />  <br />

      enter checkout: <input type="date" name="checkout" value={form.checkout} onChange={handlechange} />  <br />
    enter people: <input type="text" name="people" value={form.people} onChange={handlechange} />  <br />

    <button type='submit'>Save data </button>


        </form>
      )}
    </>
  )
}

export default on
//usestate practice


//propse
//useEffect Practice
//in react .then and .catch
// sync line by line is js 
// async is cant wait
// await is a funtion which waits 
//npm i axios       in terminall for installing 
//useeffects is a funtion which is automatically used while entering the page as default
//  when we use [] as default 1 time ([] it is said to be dependency array)
//whenever 'use' used it means it's HOOk 
//'usestate'  == > state management 
//whenever any state is to be changed in react we use 'usestate'   it Updates UI and re-render
//react says if anything want to saw in react page we have to use 'usestate'
// hook is used input any function of react

// sync line by line is js 
// async is cant wait

// -------------------------
// react pagination 
//npm i axios       in terminall for installing 
// need to use usestates
// //
//       enter checkout: <input type="date" name="checkout" value={form.checkout} onChange={handlechange} />  <br />
//     enter people: <input type="text" name="people" value={form.people} onChange={handlechange} />  <br />
//need to put this lines 

// -----------------------------------------------------------------------------------------------------------------------


import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default ToggleButton;
// -------------------------------------------------------------------------------------

import React from 'react';

function MyInfo() {
  return (
    <div>
      <h2>My name is Priyesh</h2>
      <p>I am 22 years old</p>
    </div>
  );
}

export default MyInfo;

// ----------------------------------------------------------

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;


// -----------------------------------------------------------------------

import React from 'react';

function FruitList() {
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default FruitList;
// ----------------------------------------------------------------------

import React, { useState } from 'react';

function InputExample() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Hello, {name}</h3>
    </div>
  );
}

export default InputExample;



