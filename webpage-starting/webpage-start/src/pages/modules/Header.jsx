import {NavLink} from "react-router-dom";
const Header = () => {
    return(
        <>
            <ul>
                <li><NavLink to="/" exact="true">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
        </>
    )
}
export default Header;