import {NavLink} from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import React from "react";
import { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        document.querySelectorAll(".top").forEach(function(e){
            e.addEventListener("click", function(){
                window.scrollTo(0, 0);
            });
        })
    }, []);
    return(
        <>
            <ul>
                <li><NavLink to="/" exact="true">Home</NavLink></li>
                {/* <li><NavHashLink to="/about#top">About Us</NavHashLink></li> */}
                <li><NavHashLink to="/about" className="top">About Us</NavHashLink></li>
                <li><NavHashLink className="notActive" to="/about#abouthash">Link to Hash Fragment</NavHashLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/lazyload">Lazy Load Image</NavLink></li>
                <li><NavLink to="/content">Content Lazy Load</NavLink></li>
            </ul>
        </>
    )
}
export default Header;