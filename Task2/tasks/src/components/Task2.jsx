import React, { useEffect, useState } from 'react'

function Task2() {

    const[quotes,setQuotes]=useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/quotes')
        .then((res)=> res.json())
        .then((data)=> setQuotes(data.quotes.slice(0,10)))
    },[])
  return (
    <div>
        <ul>
            {quotes.map((quot)=> (
                <h1 key={quot.id}>{quot.quote}</h1>
            ))}
        </ul>

    </div>
  )
}

export default Task2