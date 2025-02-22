import React, { useState } from 'react';
import logo from '../assets/logo_infnet.png'
import { Nav, Navbar, NavbarToggler, Collapse, NavbarBrand, NavItem, NavLink } from "reactstrap"
import '../styles.css';
import { Link } from 'react-router-dom';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <>
           <Navbar expand="md" color='dark' dark>
                <NavbarBrand style={{color: "#fff"}}>
                    <img className="img" src={logo} alt="Logo Infnet" style={{paddingRight: "5px"}}/>
                    Interfaces com React
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ms-auto' id='navbar' navbar>
                        <NavItem >
                            <NavLink tag={Link} to="/" className='item'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/sobre" className='item'>Sobre</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
};

export default Header;