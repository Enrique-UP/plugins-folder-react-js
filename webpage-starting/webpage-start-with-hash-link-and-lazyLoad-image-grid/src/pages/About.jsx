import CustomScript from "./modules/CustomScript";
import img from "../images/image.jpg";
const About = () => {
    return(
        <>
            <CustomScript>
                <section id="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">About Us</div>
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
                            <div className="col-12">
                                <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">About Us</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="image">
                    <img className="lazy" data-src={img} />
                </section>
                <section className="image">
                    <div className="lazy" data-style={img}>Style</div>
                </section>
                <section id="abouthash" className="abouthash">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">About Hash...</div>
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