import React from "react";
import { useEffect } from "react";
import {NavLink, Link} from "react-router-dom";
import logo from "../../images/logo.png";
import logoMob from "../../images/logoMob.png";
import "../../sass/header.scss";

const Header = () => {

    useEffect(() => {
        document.querySelector("header .headerBottom .menu label").addEventListener("click", function(){
            document.querySelector("header .headerBottom .navBar").classList.add("active");
            document.querySelector(".fw.background").classList.add("active");
        });
    }, []);

    return(
        <>
            <header>
                <div className="headerTop">
                    <div className="container">
                        <div className="fw">
                            <a className="mail">
                                <i className="icon">&#xe002;</i>
                                <b>Email Id:-</b>
                                <span className="txt"></span>
                            </a>
                            <a className="number">
                                <i className="icon">&#xe001;</i>
                                <b>Phone No:-</b>
                                <span className="txt"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="headerMiddle">
                    <div className="container">
                        <div className="fw">
                            <Link className="logo" to="/">
                                <img src={logo} />
                            </Link>
                            <div className="follow">
                                <b>Follow Us</b>
                                <p>
                                    <span>
                                        <a className="fb"><i className="icon">&#xe021;</i></a>
                                        <a className="tw"><i className="icon">&#xe022;</i></a>
                                        <a className="lin"><i className="icon">&#xe023;</i></a>
                                    </span>
                                    <span>
                                        <a className="ins"><i className="icon">&#xe024;</i></a>
                                        <a className="skype"><i className="icon">&#xe026;</i></a>
                                        <a className="wapp"><i className="icon fwt">&#xe025;</i></a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headerBottom">
                    <div className="container">
                        <div className="fw">
                            <p className="menu">
                                <b>Menu</b>
                                <label className="icon">&#xe003;</label>
                            </p>
                            <ul className="navBar">
                                <li>
                                    <a className="logo" href="index.html">
                                        <img src={logoMob} />
                                    </a>
                                </li>
                                <li><NavLink to="/" exact="true"><i className="icon">&#xe042;</i><b>Home</b></NavLink></li>
                                <li><NavLink to="/about"><i className="icon">&#xe015;</i><b>About Us</b></NavLink></li>
                                <li><a href="#"><i className="icon">&#xe008;</i><b>Image Gallery</b></a></li>
                                <li><a href="#"><i className="icon">&#xe007;</i><b>Services</b></a></li>
                                <li><NavLink to="/contact"><i className="icon">&#xe007;</i><b>Contact Us</b></NavLink></li>
                                <li className="tabs">
                                    <a className="icon">&#xe003;</a>
                                    <ul>
                                        <li><a href="index.html"><i className="icon">&#xe042;</i><b>Home</b></a></li>
                                        <li><a href="#"><i className="icon">&#xe015;</i><b>About Us</b></a></li>
                                        <li><a href="#"><i className="icon">&#xe008;</i><b>Image Gallery</b></a></li>
                                        <li><a href="#"><i className="icon">&#xe007;</i><b>Services</b></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;