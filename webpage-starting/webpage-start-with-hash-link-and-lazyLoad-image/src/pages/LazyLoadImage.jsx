import CustomScript from "./modules/CustomScript";
// import { useEffect } from "react";
import Image from "../images/image.jpg";
const LazyLoadImage = () => {
    // useEffect(() => {
    //     let observer = new window.IntersectionObserver(function (entries, self) {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           loadImages(entry.target);
    //           self.unobserve(entry.target);
    //         }
    //       });
    //     });
    
    //     const imgs = document.querySelectorAll("[data-src]");
    //     imgs.forEach((img) => {
    //       observer.observe(img);
    //     });
    //     return () => {
    //       imgs.forEach((img) => {
    //         observer.unobserve(img);
    //       });
    //     };
    // }, []);    
    // const loadImages = (image) => {
    //     image.src = `${image.dataset.src}`;
        
    //     if(image.hasAttribute("data-src")){
    //         image.removeAttribute("data-src");
    //     }
    // };
    const DataPropsdata = [
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image},
        {image: Image}
    ];
    function DataPropsTag(props) {
        return(
            <>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <img className="lazy" data-src={props.image} />
                </div>
            </>
        )
    }
    return(
        <>
            <CustomScript>
                <section>
                    <div className="container">
                        <div className="row lazyImage">
                            {
                                DataPropsdata.map((val, KeyName) => {
                                    return <DataPropsTag key={KeyName} image={val.image} />
                                })
                            }
                        </div>
                    </div>
                </section>
            </CustomScript>
        </>
    )
}
export default LazyLoadImage;