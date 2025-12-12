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
hook is used input any function 

