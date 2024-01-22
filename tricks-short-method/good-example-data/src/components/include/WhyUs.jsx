import logosArea1 from "../../images/logosArea1.png";
import logosArea2 from "../../images/logosArea2.png";
import logosArea3 from "../../images/logosArea3.png";
import logosArea4 from "../../images/logosArea4.png";

function WhyUsTag(props) {
    return(
        <>
            <div className="col-xs-12 col-sm-6 col-3">
                <a>
                    <img src={props.logos} data-aos="zoom-in"></img>
                    <p data-aos="fade-up">{props.head}</p>
                    <p data-aos="fade-up">{props.text}</p>
                </a>
            </div>{/* cols */}
        </>
    )
}

const WhyUs = () =>{
    const Whyusdata = [
        {
            logos: logosArea1,
            head: "Support & Motivation",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, perferendis!"
        },
        {
            logos: logosArea2,
            head: "Experience Trainers",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, perferendis!"
        },
        {
            logos: logosArea3,
            head: "Improves Flexibility",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, perferendis!"
        },
        {
            logos: logosArea4,
            head: "Supportive Community",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, perferendis!"
        }
    ];
    return(
        <>
            <section className="logosArea">
                <div className="container">
                    <div className="row">
                        {
                            Whyusdata.map((val, KeyName) => {
                                return <WhyUsTag key={KeyName} logos={val.logos} head={val.head} text={val.text} />
                            })
                        }
                    </div>{/* row */}
                </div>{/* container */}
            </section>
        </>
    );
}
export default WhyUs;