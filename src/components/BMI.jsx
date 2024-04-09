import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));
  };

  return (
    <div>
      <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height (cm)" />
      <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight (kg)" />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
};

export default BMICalculator;
