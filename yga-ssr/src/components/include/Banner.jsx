const Banner = (props) => {
return (
    <>
        <section className="banner inner">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-8 col-7">
                        <p className="head">{props.pageName}</p>
                    </div>
                </div>
            </div>
        </section>
    </>
);
}

export default Banner;
