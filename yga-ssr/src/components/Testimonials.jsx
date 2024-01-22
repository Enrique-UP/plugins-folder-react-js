import Banner from "../components/include/Banner";
import AudioIcon from "../components/include/AudioIcon";
import VideoIcon from "../components/include/VideoIcon";
import Vsee from "../images/vsee.png";
import TestimonialsData from "./include/TestimonialsData";
import {Helmet} from "react-helmet";
import Breadcrumbs from "./include/breadcrumbs";
function TestimonialsTag1(props) {
  return(
      <>
        <div className="col-xs-12 col-lg-6">
            <ul className="testimonials_box">
                <li>
                    <i className="icon">&#xf061;</i>
                    <p className="name">{props.name}</p>
                    <p className="post">{props.post}</p>
                    <p className="text">{props.text}</p>
                </li>
            </ul>
        </div>{/* cols */}
      </>
  )
}

const Testimonials = () => {
    return (
      <>
        <Helmet>
            <title>Testimonials</title>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
        </Helmet>
        <Banner pageName="Testimonials" />
        <Breadcrumbs pageName="Testimonials" />
        <section className="sectionTB contactUs">
          <div className="container">
              <div className="row">
                  <div className="col-xl-6 col-xxl-6">
                      <div className="mainHead">
                          <p className="subHead" data-aos="fade-right">Lorem</p>
                          <h1 className="head" data-aos="fade-left">Lorem ipsum dolor</h1>
                          <p className="detailsHead" data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eum inventore adipisci, quis magnam provident voluptate doloremque.</p>
                      </div>{/* mainHead */}
                  </div>{/* cols */}
                  <div className="col-12">
                    <div className="row mb">
                      {
                          TestimonialsData.map((val1, KeyName1) => {
                              return <TestimonialsTag1 key={KeyName1} name={val1.name} post={val1.post} text={val1.text} />
                          })
                      }
                    </div>{/* row */}
                </div>{/* cols */}
              </div>{/* row */}
          </div>{/* container */}
        </section>
        <AudioIcon />
        <VideoIcon />
      </>
    );
  }
  
  export default Testimonials;
  