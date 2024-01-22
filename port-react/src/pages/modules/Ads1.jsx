import "../../sass/ads1.scss";
import ads1 from "../../images/delete/ads1.jpg";
const Ads1 = () => {
    return(
        <>
            <section className="ads1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 m0">
                            <p className="subHead">Lorem, ipsum dolor</p>
                            <p className="head">Lorem ipsum dolor sit</p>
                            <p className="text">Lorem ipsum dolor sit amet</p>
                            <p className="btns center">
                                <a className="btn-red number1 rml">View More</a>
                            </p>
                        </div>
                    </div>
                </div>
                <img src={ads1} className="back" />
            </section>
        </>
    )
}
export default Ads1;