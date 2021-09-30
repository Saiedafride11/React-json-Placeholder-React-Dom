import React from 'react';
import { NavLink  } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <nav className="header">
            <NavLink className="header-nav" activeStyle={activeStyle} to="/home">Home</NavLink >
            <NavLink className="header-nav" activeStyle={activeStyle} to="/friends">Friends</NavLink >
            <NavLink className="header-nav" activeStyle={activeStyle} to="/posts">Posts</NavLink >
            <NavLink className="header-nav" activeStyle={activeStyle} to="/about">About</NavLink >
        </nav>
    );
};

export default Header;