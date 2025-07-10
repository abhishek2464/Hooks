import React, { useState } from 'react'

function Examplefour() {
    const [text, setText]=useState("Welcome to html heading");
    const [color, setColor]=useState("red");
  return (
    <div>
      <h1 style={{color:color}}>{text}</h1>
      <h1 style={{color:color}}>This is color heading </h1>
      <input type='text' onChange={e=> setText(e.target.value)} value={text}></input>
      <input type='color' onChange={e=> setColor(e.target.value)} value={color}></input>
    </div>
  )
}

export default Examplefour
