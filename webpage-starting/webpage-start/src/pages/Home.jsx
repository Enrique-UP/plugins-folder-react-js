import Reviews from "./modules/Reviews";
import Slider from "./modules/Slider";
import CustomScript from "./modules/CustomScript";


const Home = () => {
    return(
        <>
            <CustomScript>
                <Slider />
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="row">
                                <div className="col-xs-12">
                                    <div className="row">
                                        <div className="col-xs-12">Home</div>
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