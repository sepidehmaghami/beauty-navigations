import Home from "./components/home/home";
import {Route ,Routes} from 'react-router-dom'
import Nav1 from './components/nav1/nav1';
import Nav2 from './components/nav2/nav2';
import Nav3 from './components/nav3/nav3';
import Nav4 from "./components/nav4/nav4";

function App() {
  return (
    <div>
      
        <Routes>
          <Route path="/Beauty-navigations" element={<Home/>}/>
          <Route path="/nav1" element={<Nav1/>}/>
          <Route path="/nav2" element={<Nav2/>}/>
          <Route path="/nav3" element={<Nav3/>}/>
          <Route path="/nav4" element={<Nav4/>}/>
      </Routes>
    </div>
  );
}

export default App;
