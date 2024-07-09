import  {React} from 'react';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';
import FunctionalComponent from "./Components/Functional.js";
import LifecycleDemo from "./Components/Class.js";
import Wish from "./Components/prop.js";
import Counter from "./Components/State.js";
import Counting from "./Components/useEffect.js";
import Form from "./Components/Eventhandling.js";
import ConditionalRendering from "./Components/ConditionalRendering.js";

function App() {
  return (
    <div >b
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Life Cycle of react in Class Component</Link>
            </li>
            <li>
              <link to="/fun">Life Cycle of react in functional Component</link>
            </li>
            <li>
              <link to="/coun">useState</link>
            </li>
            <li>
              <link to="/wish">Props</link>
            </li>
            <li>
              <link to="/counting">useEffect</link>
            </li>
            <li>
              <link to="/form">Events</link>
            </li>
            <li>
              <link to="/conditional">Conditional rendering</link>
            </li>
          </ul>
        </nav>
      </Router>
      <Routes>
        <Route path="/" element={<LifecycleDemo/>}/>
        <Route path="/fun" element={<FunctionalComponent/>}/>
        <Route path="/coun" element={<Counter/>}/>
        <Route path="/wish" element={<Wish word="Great"/>}/>
        <Route path="/counting" element={ <Counting/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/conditional" element={<ConditionalRendering/>}/>
      </Routes>
      {/* <LifecycleDemo/> 
      <FunctionalComponent/> */}

      {/* <Counter/>
      <Wish word="Great"/>
      <Counting/>
      <Form/> */}

      {/* <ConditionalRendering/> */}



    </div>
  );
}

export default App;
