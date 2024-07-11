import React,{useState, useEffect} from 'react';

function Hook2()
{
const[resourceType,setresourcetype]=useState('posts');
useEffect(()=>{
    console.log('rendering')
},[resourceType])
return(
    <>
    <div>
        <h1>UseEffect</h1>
        <button onClick={() =>setresourcetype('posts')}>Posts</button>
        <button onClick={() =>setresourcetype('users')}>Users</button>
        <button onClick={() =>setresourcetype('comments')}>Comments</button>
        </div>
        <h4>{resourceType}</h4>
        </>
)
}
export default Hook2;