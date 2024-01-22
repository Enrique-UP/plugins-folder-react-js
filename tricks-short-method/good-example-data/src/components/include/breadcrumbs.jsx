import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
    return (
        <>
            <section className="breadcrumbs">
                <div className="container">
                    <Link to="/">Home</Link>
                    <span> - </span>
                    <i>{props.pageName}</i>
                </div>
            </section>
        </>
    );
    }
    
    export default Breadcrumbs;
    