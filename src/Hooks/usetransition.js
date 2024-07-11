import { useTransition } from "react";
import React ,{useState} from "react";
const Hook8 = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const [isPending, startTransition] = useTransition();
  
    const handleChange = (e) => {
      setInput(e.target.value);
  
      // Use startTransition to mark the state update as a transition
      startTransition(() => {
        const newList = generateLargeList(e.target.value);
        setList(newList);
      });
    };
  
    return (
      <div>
        <input type="text" value={input} onChange={handleChange} />
        {isPending ? <p>Loading...</p> : <List items={list} />}
      </div>
    );
  };
  
  // Helper function to generate a large list based on the input
  const generateLargeList = (value) => {
    return Array.from({ length: 10000 }, (_, index) => `${value} ${index}`);
  };
  
  const List = ({ items }) => (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
  
  export default Hook8;
  