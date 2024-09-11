import Reviews from "./modules/Reviews";
import Slider from "./modules/Slider";
import CustomScript from "./modules/CustomScript";
import { useEffect } from "react";
import img from "../images/image.jpg";

const Home = () => {
    // useEffect(() => {
    //     let observer = new window.IntersectionObserver(function (entries, self) {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           loadImages(entry.target);
    //           //loadImages2(entry.target);
    //           self.unobserve(entry.target);
    //         }
    //       });
    //     });
    
    //     const imgs = document.querySelectorAll("[data-src], [data-style]");
    //     imgs.forEach((img) => {
    //       observer.observe(img);
    //     });
    //     return () => {
    //       imgs.forEach((img) => {
    //         observer.unobserve(img);
    //       });
    //     };
    //   }, []);
    
    //   const loadImages = (image) => {
    //     image.src = image.dataset.src;
    //     image.style = `background-image:url(${image.dataset.style})`;
        
    //     if(image.hasAttribute("data-src")){
    //         image.removeAttribute("data-src");
    //         image.removeAttribute("style");
    //     }
    //     if(image.hasAttribute("data-style")){
    //         image.removeAttribute("data-style");
    //     }
    //   };
    return(
        <>
            <CustomScript>
                <Slider />
                <section onClick={() => window.open('https://react.dev/')}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="row">
                                <div className="col-xs-12">
                                    <div className="row">
                                        <div className="col-xs-12">Home click here...</div>
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
                                        <div className="col-xs-12">Home</div>
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