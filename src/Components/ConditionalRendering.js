import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import InLineConditionalRendering from './InlineonditionalRender.js';
import ConditionalRenderingif from './CR_if';
import Ternary from './CR_Ternary';
import Logical from './CR_Logical&&';
import Switch from './CR_Switch.js';



const ConditionalRendering = () => {
  
  return (
    <div>
      <h1>Conditional Rendering</h1>
      
         <nav>
         <ul>
           <li>
             <Link to="/conditional/ifcr">IF</Link>
           </li>
           <li>
             <Link to="/conditional/ternary">Ternary</Link>
           </li>
           <li>
             <Link to="/conditional/logi">Logical &&</Link>
           </li>
         <li>
             <Link to="/conditional/switch">Switch</Link>
           </li>
           <li>
             <Link to="/conditional/inline">Inline</Link>
           </li>
         </ul>
       </nav>
       <Routes>
         <Route path="/ifcr=" element={<ConditionalRenderingif/>} />
         <Route path="/ternary" element={<Ternary/>} />
         <Route path="/logi" element={<Logical/>} />
        <Route path="/switch" element={<Switch/>} />
        <Route path="/inline" element={<InLineConditionalRendering/>} />
        </Routes>
        
    </div>
    
  );
};
export default ConditionalRendering;
