function VideoIconTag(props) {
    return(
        <>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-3">
                <a href="#" className="videoIconArea">
                    <i className="icon">&#xf1c8;</i>
                    <p className="heads">{props.head}</p>
                    {/*<p className="text">{props.text}</p>  
                         data-aos="fade-up"
                    */}
                    <i className="icon">&#xf178;</i>
                </a>
            </div>{/* col */}
        </>
    )
}

const VideoIcon = () => {
    const Videodata = [
        {
            head: "Lorem",
            text: "Lorem ipsum is simply free text dolor amett consec adipisc."
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        },
        {
            head: "Lorem ipsum dolor sit amit?"
        }
    ];
  return (
    <>
        <section className="sectionTB videoIcon">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mainHead">
                            <p className="subHead" data-aos="fade-left">Lorem</p>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-6">
                                    <h1 className="head" data-aos="fade-right">Lorem ipsum dolor</h1>
                                </div>{/* col */}
                                <div className="col-xs-12 col-sm-12 col-6">
                                    <p className="detailsHead" data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eum inventore adipisci, quis magnam provident voluptate doloremque.</p>
                                </div>{/* col */}
                            </div>{/* row */}
                        </div>{/* mainHead */}
                    </div>{/* col */}
                </div>{/* row */}
            </div>{/* container */}
            <div className="container">
                <div className="row mb">
                    {
                        Videodata.map((val, KeyName1) => {
                            return <VideoIconTag key={KeyName1} head={val.head} text={val.text} />
                        })
                    }
                </div>{/* row */}
            </div>{/* container */}
            {/* 
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="btn center">
                            <a href="#" data-aos="zoom-in"><span>View more <i className="icon">&#xf178;</i></span></a>
                        </div>
                    </div>
                </div>
            </div>
            */}
        </section>
    </>
  );
}

export default VideoIcon;
