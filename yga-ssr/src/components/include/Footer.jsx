import {Link} from "react-router-dom";
import logo from "../../images/logo-footer.png";
const Footer = () => {
    var year = new Date().getFullYear();

    return (
    <>
      <footer>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 col-6">
                    <Link to="/" className="logo" data-aos="zoom-in">
                        <img src={logo} />
                    </Link>
                    <ul>
                        <li><Link to="/" exact="true">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/testimonials">Testimonials</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                    <p className="contacts">
                        <a href="mailto:info@demo.com" target="_blank">
                            <i className="icon">&#xf0e0;</i> info@demo.com
                        </a>
                        <a href="tel:+91-000-000-0000" target="_blank">
                            <i className="icon">&#xe804;</i> +91-000-000-0000
                        </a>
                        <a href="www.demo.com" target="_blank">
                            <i className="icon">&#xe808;</i> www.demo.com
                        </a>
                    </p>
                    <p className="contacts">
                        <a href="www.demo.com" target="_blank">
                            <i className="icon">&#xe808;</i> www.demo.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <img src={logo} className="footerIcon" />
      </footer>
      <section className="copyright">
          <div className="container">
            <span>Copyright &copy; WebsiteName with all rights reserved <i className="year">{year}</i>.</span>
          </div>
      </section>
    </>
  );
}

export default Footer;
