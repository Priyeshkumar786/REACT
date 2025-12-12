import axios from 'axios'
import React, { useEffect } from 'react'

const Datashow = () => {


    useEffect(()=>{


        // let res = fetch(api , {method:"GET"})  js 

        let api = "ttp://localhost:3000/hotel"
        axios.get(api).then(  (res)=>{

            console.log(res);
            
        }).catch((err)=>{
            console.log("Error",err);
            

        })

    },[])                                 




    
  return (
    <>
      <h1>DATA SHOW PAGE</h1>
    </>
  )
}

export default Datashow


//usestate practice