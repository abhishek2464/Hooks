import React, { useState } from 'react'
function ExampleOne() {
const [text, setText] = useState('');
const [texxt, setTexxt] = useState('');
const [texxxt, setTexxxt] = useState('');
const [color, setColor]= useState("blue");
const [colour, setColour]= useState("red");
const [coloor, setColoor]= useState("green");
  return (<>
    <div className='header'>My App</div>
    <div className='container'>
    <div className='input-box'>
    <div className='input-box1'>
      <input
        type="text"
        placeholder="Enter your Name"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input-box"/>
        <input type='color' onChange={e=> setColor(e.target.value)} value={color}></input>
    </div>
    <div className='input-box2'>
       <input
        type="text"
        placeholder="Enter your Name"
        value={texxt}
        onChange={(e) => setTexxt(e.target.value)}
        className="input-box"/>
      <input type='color' onChange={e=> setColour(e.target.value)} value={colour}></input>
    </div>
    <div className='input-box3'>
        <input
        type="text"
        placeholder="Enter your Name"
        value={texxxt}
        onChange={(e) => setTexxxt(e.target.value)}
        className="input-box"/>
      <input type='color' onChange={e=> setColoor(e.target.value)} value={coloor}></input>
    </div>
    <button className='sub'>Submit</button>
    </div>
    <div className='box'>
      <img className="img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwufSqNRmU6hFCdwoe2QHPDmp10eZczikTHQ&s' alt='image'></img>
      <p style={{color:color}}>{text }</p>
      <p style={{color:colour}}>{texxt}</p>
      <p style={{color:coloor}}>{texxxt }</p>
    </div>
    </div>
    </>
  )
}
export default ExampleOne
