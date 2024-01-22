import CustomScript from "./modules/CustomScript";
import img from "../images/image.jpg";
const About = () => {
    return(
        <>
            <CustomScript>
                <section id="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="row">
                                <div className="col-xs-12">
                                    <div className="row">
                                        <div className="col-xs-12">About Us</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="row">
                                <div className="col-xs-12">
                                    <div className="row">
                                        <div className="col-xs-12">About Us</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="image">
                    <img data-src={img} />
                </section>
                <section className="image">
                    <div data-style={img}>Style</div>
                </section>
                <section id="abouthash">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="row">
                                <div className="col-xs-12">
                                    <div className="row">
                                        <div className="col-xs-12">About Hash...</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </CustomScript>
        </>
    )
}
export default About;