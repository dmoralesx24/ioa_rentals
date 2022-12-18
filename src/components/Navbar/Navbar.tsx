import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => (
    <Menu fixed="top" inverted color={"blue"} widths={3} className='nav-bar'> 
      
      <Menu.Item href='/'>
          Home
      </Menu.Item>

      <Menu.Item href='/about'>
        About
      </Menu.Item>

      <Menu.Item href='/bookings'>
          Bookings
      </Menu.Item>
    </Menu>
)

export default Navbar