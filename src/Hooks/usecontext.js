import React, { useContext, useState } from 'react';

// 1. Create a Context
const MyContext = React.createContext();

function Hook3() {
  const [value, setValue] = useState('Hello, World!');

  return (
    // 2. Provide Context Value
    <MyContext.Provider value={value}>
        <h1>useContext</h1>
      <ChildComponent />
      <button onClick={() => setValue('Hello, React!')}>Change to React</button>
      <button onClick={()=> setValue('Hello there!')}>Change to there</button>
    </MyContext.Provider>
  );
}

function ChildComponent() {
  // 3. Consume Context Value
  const contextValue = useContext(MyContext);

  return <p>{contextValue}</p>;
}

export default Hook3;
