import { useEffect } from "react";
import "../../sass/work.scss";
import img1 from "../../images/delete/work.jpg";
import img2 from "../../images/delete/slider-1.jpg";
const Work = () => {
    useEffect(() => {
        var fixElement = document.createElement("div");
        fixElement.classList = "fixElement";
        document.querySelector("main").insertAdjacentElement("afterend", fixElement);
        document.querySelector(".fixElement").innerHTML += `
            <div class="centerArea">
                <i class="icon">&#xe039;</i>
                <div class="imageArea">
                    <img src="" />
                </div>
            </div>
        `;

        var workArea = document.querySelectorAll(".work .workArea");
        var detailBtn = document.querySelectorAll(".work .workArea .image .detail");
        var closeDetailsBtn = document.querySelectorAll(".work .workArea .image .details .icon");
        var viewBtn = document.querySelectorAll(".work .workArea .more .icon.view");
        var fixElementIcon = document.querySelector(".fixElement .centerArea .icon");
        
        detailBtn.forEach(function(e){
            e.addEventListener("click", function(){
                workArea.forEach(function(f){
                    f.classList.remove("active");
                });
                e.closest(".workArea").classList.add("active");
            });
        });

        closeDetailsBtn.forEach(function(e){
            e.addEventListener("click", function(){
                e.closest(".workArea").classList.remove("active");
            });
        });

        viewBtn.forEach(function(e){
            e.addEventListener("click", function(){
                document.querySelector(".fixElement").style.display = "flex";
                var imgSrc = this.closest(".workArea").querySelector(".image").querySelector("img").src;
                console.log(imgSrc);
                document.querySelector(".fixElement .centerArea .imageArea img").src = imgSrc;
            });
        });
        fixElementIcon.addEventListener("click", function(){
            this.closest(".fixElement").style.display = "none";
        });
    }, []);
    const WorksData = [
        {
            img : img1,
            date : "00-00-0001",
            category : `Loremipsum1`,
            name : "www.demo.com",
            link: "www.demo.com"
        },
        {
            img : img2,
            date : "00-00-0002",
            category : `Loremipsum2`,
            name : "www.demo.com",
            link: "www.demo.com"
        },
        {
            img : img1,
            date : "00-00-0003",
            category : `Loremipsum3`,
            name : "www.demo.com",
            link: "www.demo.com"
        },
        {
            img : img1,
            date : "00-00-0004",
            category : `Loremipsum4`,
            name : "www.demo.com",
            link: "www.demo.com"
        },
        {
            img : img2,
            date : "00-00-0005",
            category : `Loremipsum5`,
            name : "www.demo.com",
            link: "www.demo.com"
        },
        {
            img : img1,
            date : "00-00-0006",
            category : `Loremipsum6`,
            name : "www.demo.com",
            link: "www.demo.com"
        },
        {
            img : img1,
            date : "00-00-0007",
            category : `Loremipsum7`,
            name : "www.demo.com",
            link: "www.demo.com"
        },
        {
            img : img1,
            date : "00-00-0008",
            category : `Loremipsum8`,
            name : "www.demo.com",
            link: "www.demo.com"
        }
    ];
    function WorksDataTag(props) {
        return(
            <>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="workArea">
                        <div className="image">
                            <img src={props.img}></img>
                            <span className="date">{props.date}</span>
                            <span className="detail">View Detail</span>
                            <span className="category">{props.category}</span>
                            <span className="details">
                                <i className="icon">&#xe039;</i>
                                <span className="head">Details</span>
                                <span className="about default"><i></i></span>
                            </span>
                        </div>
                        <div className="more">
                            <span className="icon view">&#xe028;</span>
                            <span className="icon stop">&#xe029;</span>
                            <span className="name default">{props.name}</span>
                            <a className="icon" href={props.link} target="_blank">&#xe004;</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
  return (
    <>
		<section className="section back work">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className="heading">Main <span>Heading</span><i>Lorem ipsum dolor</i></h1>
                    </div>
                    {
                        WorksData.map((val, KeyName) => {
                            return <WorksDataTag key={KeyName} img={val.img} date={val.date} category={val.category} name={val.name} link={val.link} />
                        })
                    }
                </div>
            </div>
        </section>
    </>
  );
};

export default Work;