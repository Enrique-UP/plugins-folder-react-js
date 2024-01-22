import "../../sass/skills.scss";
import {useEffect} from "react";

const Skills = () => {
    let currentYear = new Date().getFullYear();
    const SkillData = [
        {
            totalYear : currentYear - 2016,
            name : `Lorem ipsum <span>dolor sit amit</span>`,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",
        },
        {   
            totalYear : currentYear - 2020,
            name : `Lorem ipsum <span>dolor sit amit</span>`,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
        },
        {   
            totalYear : currentYear - 2022,
            name : `Lorem ipsum <span>dolor sit amit</span>`,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Lorem ipsum <span>dolor sit amit</span>`,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Lorem ipsum <span>dolor sit amit</span>`,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
        },
        {
            totalYear : currentYear - 2014,
            name : `Lorem ipsum <span>dolor sit amit</span>`,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Lorem ipsum <span>dolor sit amit</span>`,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Lorem ipsum <span>dolor sit amit</span>`,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Lorem ipsum <span>dolor sit amit</span>`,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Lorem ipsum <span>dolor sit amit</span>`,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Lorem ipsum <span>dolor sit amit</span>`,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Lorem ipsum <span>dolor sit amit</span>`,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
        }        
    ];
    function SkillTag(props) {
        return(
            <>
                <div className="col-12 col-lg-6">
                    <data className="skill">
                        <div className="back">
                            <span className="animate">{props.totalYear} Years Exp</span>
                        </div>
                        <div className="content animate">
                            <p className="head" dangerouslySetInnerHTML={{ __html: props.name}}></p>
                            <p className="text">{props.text}</p>
                        </div>
                    </data>
                </div>
            </>
        )
    }
    useEffect(() => {
        var number = 100;
        var span = document.querySelectorAll(".skill .content .text");
        for(var i = 0; i < span.length; i++){
            var allText = span[i].innerHTML;
            if(number < allText.length){
                span[i].innerHTML = "<span>"+allText.slice(0, number)+"</span><i>"+allText.slice(number, allText.length)+"</i> <b>i... </b><a>View More</a>";
            }
        }    
        const link = document.querySelectorAll("[class*='col-'] .skill .content .text a");
        for (var i = 0; i < link.length; i++){
            link[i].addEventListener("click", function () {
                if (this.closest("[class*='col-']").classList.contains("active")){
                    this.closest("[class*='col-']").classList.remove("active");
                    this.innerText = "View More";
                }
                else{
                    const active = document.querySelectorAll("[class*='col-'].active");
                    for (var j = 0; j < active.length; j++){
                        active[j].classList.remove("active");
                        active[j].querySelectorAll("a").forEach(function(e){
                            e.innerText = "View More";
                        });
                    }
                    this.closest("[class*='col-']").classList.add("active");
                    this.innerText = "View Less";
                }
            });
        }

        document.querySelectorAll(".skills").forEach(function(f){
            f.addEventListener("click", function(e){
                e.stopPropagation();
            });
        });
        document.addEventListener("click", function(){
            document.querySelectorAll(".skills .skillCol [class*=col-]").forEach(function(e){
                e.classList.remove("active");
                e.querySelectorAll("a").forEach(function(a){
                    a.innerText = "View More";
                });
            });
        });
    }, []);
    return (
        <>
            <section className="section skills back">
                <div className="container">
                    <h1 className="heading animate bounceInDown">Lorem <span>Ipsum</span><i>Lorem ipsum dolor</i></h1>
                    <div className="outlineBox">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident saepe laudantium deleniti alias cum quisquam velit perferendis sed facere rem facilis voluptas atque, magni cumque. Ratione, aliquam! Natus, iusto voluptatem architecto eaque, repellendus libero et perspiciatis quasi facilis ab commodi dolores hic sint rerum enim deserunt dicta similique delectus deleniti!</div>
                    <div className="row skillCol colors">
                    {
                        SkillData.map((val, KeyName) => {
                            return <SkillTag key={KeyName} totalYear={val.totalYear} name={val.name} text={val.text} />
                        })
                    }
                    </div>
                </div>
            </section>
        </>
    );
}
export default Skills;