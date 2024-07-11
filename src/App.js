import React  from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FunctionalComponent from "./Components/Functional.js";
import LifecycleDemo from "./Components/Class.js";
import Wish from "./Components/prop.js";
import Counter from "./Components/State.js";
import Counting from "./Components/useEffect.js";
import Form from "./Components/Eventhandling.js";
import ConditionalRendering from "./Components/ConditionalRendering.js";
import Parent from './Components/Parent.js';
import Hook from './Hooks/Concept.js';



function App() {
  return (

    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Life Cycle of react in Class Component</Link>
          </li>
          <li>
            <Link to="/fun">Life Cycle of react in functional Component</Link>
          </li>
          <li>
            <Link to="/coun">useState</Link>
          </li>
          <li>
            <Link to="/wish">Props</Link>
          </li>
          <li>
            <Link to="/counting">useEffect</Link>
          </li>
          <li>
            <Link to="/form">Events</Link>
          </li>
          <li>
            <Link to="/conditional">Conditional rendering</Link>
          </li>
          <li>
            <Link to="/parentChild">Passing prop from child to parent</Link>
          </li>
          <li>
            <Link to="/hook">Hooks</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<LifecycleDemo />} />
        <Route path="/fun" element={<FunctionalComponent />} />
        <Route path="/coun" element={<Counter />} />
        <Route path="/wish" element={<Wish word="Great" />} />
        <Route path="/counting" element={<Counting />} />
        <Route path="/form" element={<Form />} />
        <Route path="/conditional/*" element={<ConditionalRendering />} />
        <Route path="/parentChild" element={<Parent/>}/>
        <Route path="/hook/*" element={<Hook/>}/>
      </Routes>
    </>
  //  <>
  // <Hook/>
  // <ConditionalRendering />
  
  //   </>
    );
}

export default App;
