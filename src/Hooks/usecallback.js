import React, { useState, useCallback } from 'react';


const Hook6= () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const addItem = useCallback(() => {
    setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
  }, []);

  return (
    <div>
      <ItemList items={items} onAddItem={addItem} />
    </div>
  );
};
const ItemList = ({ items, onAddItem }) => {
    console.log('ItemList component rendered');
    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={onAddItem}>Add Item</button>
      </div>
    );
  };
  

export default Hook6;
