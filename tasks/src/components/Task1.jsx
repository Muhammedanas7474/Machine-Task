import React, { useState } from 'react'

function Task1() {
    const[color,setColor]=useState(true)

    const switchtheme =()=> {
       
        setColor(!color)

    }
  return (
    <div>
       <div style={{height:"100vh",
        width:"100vw",
        backgroundColor:color ? "white" : "black",
        display:'flex',
        alignItems:'center',
        justifyContent:"center"}}>

         <button onClick={switchtheme}>Switch theme</button>

       </div>
    </div>
  )
}

export default Task1