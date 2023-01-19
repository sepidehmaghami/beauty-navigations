import Home from "./components/home/home";
import {Route ,Routes,Navigate } from 'react-router-dom'
import Nav1 from './components/nav1/nav1';
import Nav2 from './components/nav2/nav2';
import Nav3 from './components/nav3/nav3';

function App() {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/nav1" element={<Nav1/>}/>
          <Route path="/nav2" element={<Nav2/>}/>
          <Route path="/nav3" element={<Nav3/>}/>
      </Routes>
    </div>
  );
}

export default App;
