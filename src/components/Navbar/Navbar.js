import React from "react";
import './Navbar.scss';
import logo from '../../logo.jpg';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <img className="logo-image" src={logo} alt=""/>
            <div className="title-wrapper">
                <h3>Bungle Love</h3>
            </div>
        </nav>
    )
}

export default Navbar;