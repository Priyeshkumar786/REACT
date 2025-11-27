import React from 'react'

const Child = (Propse) => {
    // let{name,age,city}=mydata
  return (
    // <div>
    //     <h1>Hllo child</h1>
    //     <p>My name is {name} of age {age} </p>
      
    // </div>

    <>
    <h1>my cart</h1>
  <div id="cart-item" style={{border:"2px solid black"}}>
    <img src={Propse.img} alt="none" style={{height:"50px",width:"60px"}}/> <br />
    <h3>{Propse.h3}</h3>
    <p>{Propse.price}</p>
  </div>
  </>


  )
}

export default Child
