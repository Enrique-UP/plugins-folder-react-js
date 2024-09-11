import CustomScript from "./modules/CustomScript";
const Contact = () => {
    const DataPropsdata = [
        {
            text : "Contact Us 1 click here",
            link : () => window.open('https://react.dev/')
        },
        {
            text : "Contact Us 2 click here",
            link : () => window.open('https://react.dev/')
        },
        {
            text : "Contact Us 3 click here",
            link : () => window.open('https://react.dev/')
        }
    ];
    function DataPropsTag(props) {
        return(
            <>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="row">
                                <div className="col-xs-12">
                                    <div className="row">
                                        <div className="col-xs-12" onClick={props.link}>
                                            <p>{props.text}</p>
                                        </div>
                                        <div className="col-xs-12">
                                            <a onClick={(e) => {e.target.closest(".container").classList.toggle("active")}}>{props.text} Click here...</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
    return(
        <>
            <CustomScript>
                {
                    DataPropsdata.map((val, KeyName) => {
                        return <DataPropsTag key={KeyName} text={val.text} link={val.link} />
                    })
                }
            </CustomScript>
        </>
    )
}
export default Contact;