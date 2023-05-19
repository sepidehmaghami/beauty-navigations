import './nav4.css';
import BackBtn from '../backBtn/backBtn';
import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/List';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Nav4() {
  const [value, setValue] = React.useState(0);
  return (
    <div className="navigation-three">
       <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      // showLabels
      className="nav-three"
    >
      <BottomNavigationAction label="List" icon={<ListIcon />} />
      <BottomNavigationAction label="LocalOffer" icon={<LocalOfferIcon />} />
      <BottomNavigationAction label="LocalMall" icon={<LocalMallIcon />} />
      <BottomNavigationAction label="Notifications" icon={<NotificationsIcon />} />
    </BottomNavigation>
        <BackBtn/>
    </div>
  );
}

export default Nav4;