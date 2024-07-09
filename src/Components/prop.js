import React from 'react';

const Greeting = (props) => {
  return <h4>Hello, {props.name}!</h4>;
};

const Wish = (props) => {
  return (
    <div>
      <h1>Example of props(properties)</h1>
      <Greeting name="Priya" />
      <h4>I am doing a {props.word}  job!</h4>
    </div>
  );
};

export default Wish;
