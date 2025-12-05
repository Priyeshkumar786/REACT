import React from 'react'

const valid = () => {
    let [form,setform]=useState({
        name:"",
        email:""
    });
    let handleclick=(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    let handlesubmit=(e)=>{
        e.preventDefault();
        console.log("Data",form);
        if(form.name.trim()===""){
            alert("name can'nt be empty");
            return;
        }
    }
    
  return (
    <>
    <h1>Hello..</h1>
    <form onSubmit={handlesubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text"  name="name" onChange={handleclick}  />

        <br /> <br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={handleclick} /> <br />

        <input type="submit" />
    </form>
    </>
  )
}


// form validation of more inputs
//react bits library website

export default valid