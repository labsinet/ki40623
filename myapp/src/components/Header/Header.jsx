import React, { useState } from "react";
import { Routes, Link } from "react-router-dom";
import logo from "./logo.png"
import "./Header.scss"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [ title, setTitle ] = useState("Is Logged");
    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    } 

    // const clickMe = (login) => {
    //     console.log('Clicked'+ login);
    // }

    const changeTitle = () => {
        setTitle("Relogin");
    }

    return (
        <div>
            <header className="header">
                <div className="header-container">
                   <div className="logo-container">
                        <img src={logo} alt="Logo" className="logo" />
                   </div>
                   <nav className={showMenu ? "nav nav-show" : "nav"}>
                        <ul className="nav-list">
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item">Shop</li>
                        <li className="nav-item"><Link to="/about">About</Link></li>
                        <li className="nav-item">Contact</li>
                        </ul>
                    </nav>
                    <div className="login-container">
                        <button className="login-button" onClick={ () => changeTitle() }>Login</button>
                    </div>
                    <div className="burger-container" onClick={handleMenuToggle}>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    </div>
                </div>
            </header>
            <h3>{ title }</h3>
        </div>

    );
}

export default Header;