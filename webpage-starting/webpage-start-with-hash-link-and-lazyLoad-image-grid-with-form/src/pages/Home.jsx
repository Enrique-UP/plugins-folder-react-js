import Reviews from "./modules/Reviews";
import CustomScript from "./modules/CustomScript";
import img from "../images/image.jpg";

const Home = () => {
    return(
        <>
            <CustomScript>
                <section onClick={() => window.open('https://react.dev/')}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">Home click here...</div>
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
                                        <div className="col-12">Home</div>
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
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">Home</div>
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
                                        <div className="col-12">Home</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Reviews />
            </CustomScript>
        </>
    );
}
export default Home;