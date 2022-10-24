import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/"> Home </Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};
