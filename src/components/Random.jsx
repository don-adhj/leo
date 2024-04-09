import React, { useState } from 'react';

const RandomNumberGenerator = () => {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const minNum = parseInt(min);
    const maxNum = parseInt(max);
    if (!isNaN(minNum) && !isNaN(maxNum)) {
      const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      setRandomNumber(randomNum);
    }
  };

  return (
    <div>
      <input type="number" value={min} onChange={(e) => setMin(e.target.value)} placeholder="Min" />
      <input type="number" value={max} onChange={(e) => setMax(e.target.value)} placeholder="Max" />
      <button onClick={generateRandomNumber}>Generate</button>
      {randomNumber && <p>Random Number: {randomNumber}</p>}
    </div>
  );
};

export default RandomNumberGenerator;
