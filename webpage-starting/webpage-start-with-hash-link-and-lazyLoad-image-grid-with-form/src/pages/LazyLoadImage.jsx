import CustomScript from "./modules/CustomScript";
import Image from "../images/image.jpg";
const LazyLoadImage = () => {
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
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