import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const clear = () => {
    setResult('');
    setExpression('');
  };

  const calculateResult = () => {
    try {
      setExpression(eval(expression))
      setResult(eval(expression));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input className="display" type="text" value={expression} readOnly />
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={clear}>C</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>
      </div>
      <button className="equal" onClick={calculateResult}>=</button>
      <p className="result">Result: {result}</p>
    </div>
  );
};

export default Calculator;
