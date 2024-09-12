import {NavLink} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React from "react";

const Header = () => {
    function top(){
        window.scrollTo(0, 0);
    }
    return(
        <>
            <ul>
                <li><NavLink to="/" exact="true">Home</NavLink></li>
                <li><NavLink to="/about" onClick={top}>About Us</NavLink></li>
                <li><HashLink to="/about#abouthash">Link to Hash Fragment</HashLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/lazyload">Lazy Load Image</NavLink></li>
            </ul>
        </>
    )
}
export default Header;