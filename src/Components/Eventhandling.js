import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputValue}`);
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <h1>Example of EventHandling in react</h1>
      <label>
        Input:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
