import React, { useState, useDeferredValue } from 'react';

function Hook9() {
  const [input, setInput] = useState('');
  const deferredInput = useDeferredValue(input);

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type to search..." 
      />
      <SearchResults query={deferredInput} />
    </div>
  );
}

function SearchResults({ query }) {
  // Simulate a heavy computation or API call
  const results = Array(10000).fill(query).map((item, index) => (
    <div key={index}>{item}</div>
  ));

  return (
    <div>
      <h3>Search Results for: {query}</h3>
      {results}
    </div>
  );
}

export default Hook9;
