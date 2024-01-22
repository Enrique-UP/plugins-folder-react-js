import "../../sass/experience.scss";
function ExperienceTag(props) {
    return(
        <>
            <li>
                <i className="circles animate"></i>
                <data className="headText animate bounceInLeft">
                    <p className="duration"><i className="icon">&#xe051;</i>{props.year}</p>
                    <p className="head"><i className="icon">&#xe015;</i>Profile</p>
                    <p className="subHead1">Roles &amp; Responsibilities</p>
                    <p className="text mb">{props.roles}</p>
                    <p className="subHead"><i className="icon">&#xe009;</i>{props.cName}</p>
                    <p className="subHead1">About the C</p>
                    <p className="text">{props.aboutC}</p>
                </data>
            </li>
        </>
    )
}
const Experience = () => {
    const ExperienceData = [
        {
            year: "1000 - 0001",
            roles: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, perferendis!",
            cName: "1 C Name",
            aboutC: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            year: "2000 - 0002",
            roles: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, perferendis!",
            cName: "2 C Name",
            aboutC: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            year: "3000 - 0003",
            roles: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, perferendis!",
            cName: "3 C Name",
            aboutC: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            year: "4000 - 0004",
            roles: "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, perferendis!",
            cName: "4 C Name",
            aboutC: "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            year: "5000 - 0005",
            roles: "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, perferendis!",
            cName: "5 C Name",
            aboutC: "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            year: "6000 - 0006",
            roles: "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, perferendis!",
            cName: "6 C Name",
            aboutC: "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ];
    return(
        <>
            <section className="sectionT experience back">
                <div className="container">
                    <h1 className="heading animate bounceInDown">Main <span>Heading</span><i>Lorem ipsum dolor</i></h1>
                </div>
                <div className="container">
                    <ul className="exp colors">
                        {
                            ExperienceData.map((val, KeyName) => {
                                return <ExperienceTag key={KeyName} year={val.year} roles={val.roles} cName={val.cName} aboutC={val.aboutC} />
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    );
}
export default Experience;