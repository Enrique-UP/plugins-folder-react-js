import "./sass/common/common.scss";
import "./sass/skills.scss";
import logo from "./logo.svg";
const DataProps = () => {
    const DataPropsdata = [
        {
            logo : logo,
            direction : "left",
            head : `Lorem ipsum <i><u>dolor sit amit</u></i>`,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, perferendis!",
            link : () => window.open('https://react.dev/')
        },
        {
            logo : logo,
            direction : "right",
            head : `Lorem ipsum <i><u>dolor sit amit</u></i>`,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, perferendis!",
            link : () => window.open('https://react.dev/')
        },
        {
            logo : logo,
            direction : "left",
            head : `Lorem ipsum <i><u>dolor sit amit</u></i>`,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, perferendis!",
            link : () => window.open('https://react.dev/')
        },
        {
            logo : logo,
            direction : "right",
            head : `Lorem ipsum <i><u>dolor sit amit</u></i>`,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, perferendis!",
            link : () => window.open('https://react.dev/')
        }
    ];
    function DataPropsTag(props) {
        return(
            <>
                <a onClick={props.link}>
                    <img src={props.logo} data-aos={"zoom-in " + props.direction}></img>
                    <p data-aos="fade-up" dangerouslySetInnerHTML={{ __html: props.head}}></p>
                    <p data-aos="fade-up">{props.text}</p>
                </a>
            </>
        )
    }
    return(
        <>
            {
                DataPropsdata.map((val, KeyName) => {
                    return <DataPropsTag key={KeyName} logo={val.logo + ".jpg"} head={val.head} text={val.text} direction={val.direction} link={val.link} />
                })
            }
        </>
    )
}
export default DataProps;