import "../../sass/education.scss";
function EducationTag(props) {
    return(
        <>
            <data>
                <i className="circles"></i>
                <aside className="year">
                    <span className="animate bounceInRight active">{props.year}</span>
                </aside>
                <aside className="headText">
                    <div className="shadow animate bounceInLeft active">
                        <p className="head">
                            <span>{props.sr}</span>
                            <b>{props.head}</b>
                        </p>
                        <p className="text">
                            <b>{props.subHead}</b>
                            <span>{props.text}</span>
                        </p>
                    </div>
                </aside>
            </data>
        </>
    )
}
const Education = () => {
    const EducationData = [
        {
            year: "1000",
            sr: "01",
            head: "1 C Name",
            subHead: "1 C Name",
            text: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            year: "2000",
            sr: "02",
            head: "2 C Name",
            subHead: "2 C Name",
            text: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            year: "3000",
            sr: "03",
            head: "3 C Name",
            subHead: "3 C Name",
            text: "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            year: "4000",
            sr: "04",
            head: "4 C Name",
            subHead: "4 C Name",
            text: "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            year: "5000",
            sr: "05",
            head: "5 C Name",
            subHead: "5 C Name",
            text: "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            year: "6000",
            sr: "06",
            head: "6 C Name",
            subHead: "6 C Name",
            text: "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ];
    return (
        <>
            <section className="sectionT education">
                <div className="container">
                    <h1 className="heading">Main <span>Heading</span><i>Lorem ipsum dolor</i></h1>
                </div>
                <div className="container">
                    <div className="edu colors">
                        {
                            EducationData.map((val, KeyName) => {
                                return <EducationTag key={KeyName} year={val.year} sr={val.sr} head={val.head} subHead={val.subHead} text={val.text} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
export default Education;