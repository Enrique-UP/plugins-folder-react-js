import {Helmet} from "react-helmet";
import aboutUs from "../images/aboutUs.webp";
import Banner from "./include/Banner";
import AudioIcon from "./include/AudioIcon";
import VideoIcon from "./include/VideoIcon";
import Breadcrumbs from "./include/breadcrumbs";

const AboutUs = () => {
  return (
    <>
        <Helmet>
            <title>About Us</title>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
        </Helmet>
      <Banner pageName="About Us" />
      <Breadcrumbs pageName="About Us" />
      <section className="sectionTB aboutUs">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-6">
                    <div className="mainHead">
                        <p className="subHead" data-aos="fade-right">Lorem</p>
                        <h1 className="head" data-aos="fade-left">Lorem ipsum dolor</h1>
                        <p className="detailsHead" data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eum inventore adipisci, quis magnam provident voluptate doloremque.</p>
                    </div>{/* mainHead */}
                </div>{/* cols */}
                <div className="col-xs-12 col-sm-12 col-6">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, numquam minus? Beatae quas veniam dolor porro facere voluptas dignissimos cupiditate assumenda corrupti nisi? Debitis nobis, fugiat possimus incidunt quia nulla alias at nemo unde ex repudiandae eum. Sequi repellat veritatis reiciendis, at amet neque et dolores cum, pariatur ad maiores! Odit ad pariatur fugit totam numquam dolore voluptatum voluptas, explicabo facilis, reiciendis odio quisquam. Deleniti ad porro assumenda facilis quaerat neque ipsum cum reprehenderit, unde sed laboriosam aliquid, qui ut minus distinctio molestias, incidunt recusandae. Quas exercitationem, distinctio et dicta animi. Repudiandae nesciunt excepturi voluptatem necessitatibus voluptatibus pariatur iste odio.</p>
                </div>{/* cols */}
                <div className="col-12">
                    <div className="details">
                        <img src={aboutUs} alt="" className="banner" data-aos="zoom-in"></img>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, numquam minus? Beatae quas veniam dolor porro facere voluptas dignissimos cupiditate assumenda corrupti nisi? Debitis nobis, fugiat possimus incidunt quia nulla alias at nemo unde ex repudiandae eum. Sequi repellat veritatis reiciendis, at amet neque et dolores cum, pariatur ad maiores! Odit ad pariatur fugit totam numquam dolore voluptatum voluptas, explicabo facilis, reiciendis odio quisquam. Deleniti ad porro assumenda facilis quaerat neque ipsum cum reprehenderit, unde sed laboriosam aliquid, qui ut minus distinctio molestias, incidunt recusandae. Quas exercitationem, distinctio et dicta animi.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, numquam minus? Beatae quas veniam dolor porro facere voluptas dignissimos cupiditate assumenda corrupti nisi? Debitis nobis, fugiat possimus incidunt quia nulla alias at nemo unde ex repudiandae eum. Sequi repellat veritatis reiciendis, at amet neque et dolores cum, pariatur ad maiores! Odit ad pariatur fugit totam numquam dolore voluptatum voluptas, explicabo facilis, reiciendis odio quisquam. Deleniti ad porro assumenda facilis quaerat neque ipsum cum reprehenderit, unde sed laboriosam aliquid, qui ut minus distinctio molestias, incidunt recusandae. Quas exercitationem, distinctio et dicta animi.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, numquam minus? Beatae quas veniam dolor porro facere voluptas dignissimos cupiditate assumenda corrupti nisi? Debitis nobis, fugiat possimus incidunt quia nulla alias at nemo unde ex repudiandae eum. Sequi repellat veritatis reiciendis, at amet neque et dolores cum, pariatur ad maiores! Odit ad pariatur fugit totam numquam dolore voluptatum voluptas, explicabo facilis, reiciendis odio quisquam. Deleniti ad porro assumenda facilis quaerat neque ipsum cum reprehenderit, unde sed laboriosam aliquid, qui ut minus distinctio molestias, incidunt recusandae. Quas exercitationem, distinctio et dicta animi.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, numquam minus? Beatae quas veniam dolor porro facere voluptas dignissimos cupiditate assumenda corrupti nisi? Debitis nobis, fugiat possimus incidunt quia nulla alias at nemo unde ex repudiandae eum. Sequi repellat veritatis reiciendis, at amet neque et dolores cum, pariatur ad maiores! Odit ad pariatur fugit totam numquam dolore voluptatum voluptas, explicabo facilis, reiciendis odio quisquam. Deleniti ad porro assumenda facilis quaerat neque ipsum cum reprehenderit, unde sed laboriosam aliquid, qui ut minus distinctio molestias, incidunt recusandae. Quas exercitationem, distinctio et dicta animi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, numquam minus? Beatae quas veniam dolor porro facere voluptas dignissimos cupiditate assumenda corrupti nisi? Debitis nobis, fugiat possimus incidunt quia nulla alias at nemo unde ex repudiandae eum. Sequi repellat veritatis reiciendis, at amet neque et dolores cum, pariatur ad maiores! Odit ad pariatur fugit totam numquam dolore voluptatum voluptas, explicabo facilis, reiciendis odio quisquam. Deleniti ad porro assumenda facilis quaerat neque ipsum cum reprehenderit, unde sed laboriosam aliquid, qui ut minus distinctio molestias, incidunt recusandae. Quas exercitationem, distinctio et dicta animi. Deleniti ad porro assumenda facilis quaerat neque ipsum cum reprehenderit, unde sed laboriosam aliquid, qui ut minus distinctio molestias, incidunt recusandae quas animi.</p>
                    </div>{/* details */}
                </div>{/* cols */}
            </div>{/* row */}
        </div>{/* container */}
    </section>
    <AudioIcon />
    <VideoIcon />
    </>
  );
}

export default AboutUs;
