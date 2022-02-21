import React from 'react';
import { Menu } from 'semantic-ui-react';
import './Navbar.css';

const Navbar = () => (
    <Menu fixed="top" inverted color={"blue"} widths={3} id='nav-bar' > 
      <Menu.Item>
        Home
      </Menu.Item>

      <Menu.Item name='reviews'>
        About
      </Menu.Item>

      <Menu.Item name='upcomingEvents' >
        Booking
      </Menu.Item>
    </Menu>
)

export default Navbar