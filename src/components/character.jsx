import React, { useState } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleInputChange} />
      <p>Character count: {text.length}</p>
    </div>
  );
};

export default CharacterCounter;
