import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Hook2 from "./Useeffect";
import Hook3 from "./usecontext";
import Hook4 from "./useref";
import Hook5 from "./usememo";
import Hookstate from "./Usestate";
import Hook6 from "./usecallback";
import Hook7 from "./usereducer";
import Hook8 from "./usetransition";
import Hook9 from "./usedeferredvalue";
import Hook10 from "./uselayouteffect";
import Hook11 from "./usedebugvalue";
import Hook12 from "./useimperativehandle";
import Hook13 from "./useid";
function Hook()
{
return(
    <>
    <h1>Hooks in functional component</h1>
    <nav>
      <ul>
        <li>
            <Link to ="/hook/usestate">useState</Link>
        </li>
        <li>
            <Link to="/hook/useeffect">useEffect</Link>
        </li>
        <li>
            <Link to="/hook/useref">useRef</Link>
        </li>
        <li>
            <Link to="/hook/usememo">useMemo</Link>
        </li>
        <li>
            <Link to="/hook/useContexting">useContext</Link>
        </li>
        <li>
            <Link to="/hook/usecallback">useCallback</Link>
        </li>
        <li>
            <Link to="/hook/usereducer">useReducer</Link>
        </li>
        <li>
            <Link to="/hook/usetransition">usetransition</Link>
        </li>
        <li>
            <Link to="/hook/usedeferredvalue">useDeferredValue</Link>
        </li>
        <li>
            <Link to="/hook/uselayouteffect">useLayoutEffect</Link>
        </li>
        <li>
            <Link to="/hook/usedebugvalue">useDebugValue</Link>
        </li>
        <li>
            <Link to="/hook/useimperativehandle">useImperativehandle</Link>
        </li>
        <li>
            <Link to="/hook/useid">useId</Link>
        </li>
      </ul>
    </nav>
    <Routes>
        <Route path="/usestate" element={<Hookstate/>}/>
        <Route path="/useeffect" element={<Hook2/>}/>
        <Route path="/useContexting" element={<Hook3/>}/>
        <Route path="/useref" element={<Hook4/>}/>
        <Route path="/usememo" element={<Hook5/>}/>
        <Route path="/usecallback" element={<Hook6/>}/>
        <Route path="/usereducer" element={<Hook7/>}/>
        <Route path="/usetransition" element={<Hook8/>}/>
        <Route path="/usedeferredvalue" element={<Hook9/>}/>
        <Route path="/uselayouteffect" element={<Hook10/>}/>
        <Route path="/usedebugvalue" element={<Hook11/>}/>
        <Route path="/useimperativehandle" element={<Hook12/>}/>
        <Route path="/useid" element={<Hook13/>}/>
    </Routes>
    </>
);
}
export default Hook;