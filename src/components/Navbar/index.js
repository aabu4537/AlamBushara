import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';


const Navbar = () => {
  return (
    <>
    <Nav>
        <NavLink to="/">
        <img src={require('../../images/ab.png')} style={{ width: '40px', height: 'auto' }}/>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/about" activeStyle>
                About
            </NavLink>
            <NavLink to="/contact-us" activeStyle>
                Contact Me
            </NavLink>
        </NavMenu>
    </Nav>
    </>
  );
};

export default Navbar;
