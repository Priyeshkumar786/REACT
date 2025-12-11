import React from 'react'

const Map = () => {

  let [search,netsearch]=a

  // let Mydata=["siddharth" , "Arun" , "Shivam" , "Raja"]

  // let Data =[(),(),()]




      

               
   
    
    let Mydata=["siddharth" , "Arun" , "Shivam" , "Raja"]
    let filterData = MyData.filter((e)=>{
      e.toLowercase()
    })










  //array of object and acces the data and see
  return (
    <>
    {/* <h1>Map</h1>

    <ul>
      {Mydata.map((e,i)=> (

        <li key={i}> {e} </li>

      ) ) }
    </ul> */}
      


{/*          
          <h1>Map</h1>

    <ul>
      {Data.map((e,id)=> (

      <div key={e.id}> {e} 
        <h1>{e,name}</h1>
        <p>{e.city}</p>

      </div>

      ) ) }
    </ul> */}




            
             Search <input type="text" value={search} onChange={(e)} 
             
             
             
             
             
             />





    </>
  )
}

export default Map


// search input with the use of filter      usestate to be used



