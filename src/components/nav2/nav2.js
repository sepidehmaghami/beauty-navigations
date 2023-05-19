import './nav2.css';
import BackBtn from '../backBtn/backBtn';
import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function Nav2() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
      <AppBar position="static" className="navigation-two">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One"  />
          <Tab label="Item Two"  />
          <Tab label="Item Three"  />
        </Tabs>
      </AppBar>
  
      <BackBtn/>
    </div>
  );
}

export default Nav2;
