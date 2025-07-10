import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // use with caution (or replace with safer parser)
    } catch {
      setInput('Error');
    }
  };

  return (
    <div style={styles.calculator}>
      <input type="text" value={input} readOnly style={styles.display} />
      <div style={styles.buttons}>
        {['7', '8', '9', '/'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        {['4', '5', '6', '*'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        {['1', '2', '3', '-'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        {['0', '.', '+'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

const styles = {
  calculator: {
    width: '220px',
    margin: '50px auto',
    padding: '20px',
    border: '2px solid #333',
    borderRadius: '10px',
    backgroundColor: '#f0f0f0'
  },
  display: {
    width: '100%',
    height: '40px',
    fontSize: '20px',
    marginBottom: '10px',
    textAlign: 'right',
    paddingRight: '10px'
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px'
  }
};

export default Calculator;

