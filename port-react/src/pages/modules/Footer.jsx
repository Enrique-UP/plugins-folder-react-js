import {Link} from "react-router-dom";
import logo from "../../images/logoWhite.png";
import "../../sass/footer.scss";
const Footer = () => {
    return(
        <>
            <footer className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="logo">
                                <Link to="/"><img src={logo} /></Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-3">
                            <p className="head">About Us</p>
                            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque neque vel, molestias officiis, laboriosam doloribus architecto quas sed animi itaque dolorem accusantium rerum sit quod inventore eveniet labore quam ad illo delectus voluptatibus ut. Rem numquam modi, quis quas quos sed? Sit explicabo repellat molestias. Id nesciunt reiciendis amet! Quibusdam ab tenetur autem nihil ratione illo. Eum, voluptatum ratione voluptatum ratione voluptatum ratione voluptatum ratione dicta vel accusamus, esse. <a href="#">Read More</a></p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-3">
                            <p className="head">Main Links</p>
                            <ul className="links">
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem Dolor</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem Sit</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem Amit</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-3">
                            <p className="head">Social Posts</p>
                            <div className="social">
                                <a href="#" target="_blank">
                                    <span>
                                        <b>00 Jan</b>
                                        <em>0000</em>
                                    </span>
                                    <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                                </a>
                                <a href="#" target="_blank">
                                    <span>
                                        <b>00 Jan</b>
                                        <em>0000</em>
                                    </span>
                                    <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                                </a>
                                <a href="#" target="_blank">
                                    <span>
                                        <b>00 Jan</b>
                                        <em>0000</em>
                                    </span>
                                    <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                                </a>
                                <a href="#" target="_blank">
                                    <span>
                                        <b>00 Jan</b>
                                        <em>0000</em>
                                    </span>
                                    <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                                </a>
                                <a href="#" target="_blank">
                                    <span>
                                        <b>00 Jan</b>
                                        <em>0000</em>
                                    </span>
                                    <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-3">
                            <p className="head">Contact Us</p>
                            <div className="contact">
                                <a className="number">
                                    <span>
                                        <b className="icon">&#xe001;</b>
                                        <em>Phone No.</em>
                                    </span>
                                    <em className="txt"></em>
                                </a>
                                <a className="mail">
                                    <span>
                                        <b className="icon">&#xe002;</b>
                                        <em>Email ID.</em>
                                    </span>
                                    <em className="txt"></em>
                                </a>
                                <a className="address">
                                    <span>
                                        <b className="icon">&#xe027;</b>
                                        <em>Address</em>
                                    </span>
                                    <em className="txt"></em>
                                </a>
                            </div>
                            <p className="head">Social Links</p>
                            <div className="media">
                                <a className="icon fb">&#xe021;</a>
                                <a className="icon tw">&#xe022;</a>
                                <a className="icon lin">&#xe023;</a>
                                <a className="icon ins">&#xe024;</a>
                                <a className="icon skype">&#xe026;</a>
                                <a className="icon wapp fwt">&#xe025;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <div className="container">Copyright &copy; <span>2025</span> Lorem ipsum dolor sit amet.</div>
            </div>
        </>
    )
}
export default Footer;