import React from 'react';
import NavigationBar from '../pages/Navbar/NavigationBar';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
          <NavigationBar></NavigationBar>
          {/* <Home></Home> */}
          <Outlet></Outlet>
        </div>
    );
};

export default Main;