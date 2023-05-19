import './nav2.css';
import { useState } from 'react';
import BackBtn from '../backBtn/backBtn';
import { AiTwotoneHome, AiOutlineTwitter, AiFillBell , AiOutlineUser} from "react-icons/ai"

function Nav2() {
  const [check , setCheck]= useState([
    {
      flag: true
    },
    {
      flag: false
    },
    {
      flag: false
    },
    {
      flag: false
    }
  ]);
  const selectNav =(e) =>{
    if(!check){
        setCheck(true);
    }       
    else{
        setCheck(false);          
    }
  }

  const extra_styles = (check) => {
    if (check) {
        return {
            color: "#2ee197",
            fontSize: "35PX"
        };
        }
    else {
        return {
          color: "rgb(103, 103, 103)",
          fontSize: "30PX"
        }
    }
};
  
  return (
    <div className="navigation-two">
        <ul className='nav-two'>
          <li>
            <AiTwotoneHome style={extra_styles(check[0].flag)} onClick={e => selectNav(0)} />
          </li>
          <li>
            <AiOutlineTwitter style={extra_styles(check[1].flag)} onClick={e => selectNav(1)} />
          </li>
          <li>
            <AiFillBell style={extra_styles(check[2].flag)} onClick={e => selectNav(2)}/>
          </li>
          <li>
            <AiOutlineUser style={extra_styles(check[3].flag)} onClick={e => selectNav(3)}/>  
          </li>
        </ul>
        <BackBtn/>
    </div>
  );
}

export default Nav2;
