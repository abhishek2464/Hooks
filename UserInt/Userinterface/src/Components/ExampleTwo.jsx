import React, { useState } from 'react';


function ExampleTwo() {
  const [text, setText] = useState('');
  const [texxt, setTexxt] = useState('');
  const [texxxt, setTexxxt] = useState('');
  const [color, setColor]= useState("blue");
  const [colour, setColour]= useState("red");
  const [coloor, setColoor]= useState("green");

  return (<>
    <div className='header'>My App</div>
    <div className="container">
      <div div className="input-box1">
      <input
        type="text"
        placeholder="Enter your Name"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input-box"
      /></div>
        <div className="input-box2">
       <input
        type="text"
        placeholder="Enter your Name"
        value={texxt}
        onChange={(e) => setTexxt(e.target.value)}
        className="input-box"
      /></div>
        <div className="input-box3">
        <input
        type="text"
        placeholder="Enter your Name"
        value={texxxt}
        onChange={(e) => setTexxxt(e.target.value)}
        className="input-box"
      />
      </div>
    
    

      <div className="preview-box">
                <input type='color' onChange={e=> setColor(e.target.value)} value={color}></input>
        <input type='color' onChange={e=> setColour(e.target.value)} value={colour}></input>
        <input type='color' onChange={e=> setColoor(e.target.value)} value={coloor}></input>
        <div className='texts'>{text || ""}</div> 
            
        <div className='texts'>{texxt || ""} </div>
        
        <div className='texts'>{texxxt || ""}</div>


        </div>
    </div></>
  );
}

export default ExampleTwo;
