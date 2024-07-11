import React,{useState} from 'react';
function Hookstate(){
    const[count,setCount]= useState(0)
    const[theme,setTheme]=useState('blue')
    
    function decrementCount()
    {
        setCount(prevCount=>prevCount-1);
        setTheme('Yellow');
    }
    function incrementCount()
    {
        setCount(prevCount=>prevCount+1);
        setTheme('red');
    }
    return(
        <>
        <h1>useState</h1>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
        </>
    )
}
export default Hookstate;