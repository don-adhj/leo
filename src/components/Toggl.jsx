import React, { useState } from 'react';

const ButtonToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return <button onClick={handleToggle}>{isOn ? 'ON' : 'OFF'}</button>;
};

export default ButtonToggle;
