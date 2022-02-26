import React from 'react';
import { Menu } from 'semantic-ui-react';
import './Navbar.css';

const Navbar = () => (
    <Menu fixed="top" inverted color={"blue"} widths={3} className='nav-bar'> 
      <Menu.Item link>
        Home
      </Menu.Item>

      <Menu.Item link>
        About
      </Menu.Item>

      <Menu.Item link>
        Bookings
      </Menu.Item>
    </Menu>
)

export default Navbar