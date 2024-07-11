
// Child.js
import React from 'react';

const Child = ({ sendMessageToParent }) => {
  const handleClick = () => {
    sendMessageToParent("Hello from Child!");
  };

  return (
    <div>
      <button onClick={handleClick}>Send Message</button>
    </div>
  );
};

export default Child;
