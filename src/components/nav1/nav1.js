// import './nav1.css';
// import BackBtn from '../backBtn/backBtn';
// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import PhoneIcon from '@material-ui/icons/Phone';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
// import HelpIcon from '@material-ui/icons/Help';
// import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
// import ThumbDown from '@material-ui/icons/ThumbDown';
// import ThumbUp from '@material-ui/icons/ThumbUp';

// function Nav1() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <div >
//       <AppBar position="static" className="navigation-one">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           variant="scrollable"
//           // scrollButtons="off"
//           aria-label="scrollable prevent tabs example"
//         >
//           <Tab icon={<PhoneIcon />} aria-label="phone"/>
//           <Tab icon={<FavoriteIcon />} aria-label="favorite"/>
//           <Tab icon={<PersonPinIcon />} aria-label="person"/>
//           <Tab icon={<HelpIcon />} aria-label="help"/>
//           <Tab icon={<ShoppingBasket />} aria-label="shopping"/>
//           <Tab icon={<ThumbUp />} aria-label="up"/>
//           <Tab icon={<ThumbDown />} aria-label="down"/>
//         </Tabs>
//       </AppBar>

//       <BackBtn/>
//     </div>
//   );
// }

// export default Nav1;
