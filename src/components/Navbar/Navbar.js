import React from "react";
import './Navbar.scss';
import logo from '../../logo.jpg';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <img className="logo-image" src={logo} alt=""/>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link">
                        About
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link">
                        Albums
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;