import { useEffect } from "react";
import "../../sass/disclaimer.scss";
const Disclaimer = () => {
    useEffect(() => {
        function marquee() {
            var id = document.querySelectorAll(".marquee");
            var disWidth = document.querySelector(".disclaimer .fw>span").offsetWidth;
            var tid = 0;
            for (var j = 0; j < id.length; j++) {
                tid = id[j].offsetWidth - (2 * disWidth);
                id[j].style.width = tid + "px";
                id[j].style.setProperty("--x", -tid + "px");
                var time = (tid / 100) * 2;
                id[j].style.animationDuration = time + "s";
            }
        }
        window.addEventListener("resize", marquee);
        window.addEventListener("load", marquee);

        (function () {
            var text = document.querySelector(".disclaimer .fw>span").innerText;
            document.querySelector(".disclaimer .marqueePopup .head").innerHTML += text;

            var ul = document.querySelector(".disclaimer .marquee").innerHTML;
            document.querySelector(".disclaimer .marqueePopup .fwidth>ul").innerHTML = ul;

            document.querySelector(".disclaimer .fw>i").addEventListener("click", function () {
                document.querySelector(".disclaimer .marqueePopup").style.display = "block";
                setTimeout(function () {
                    document.querySelector(".disclaimer .marqueePopup").querySelector(".fwidth").classList.add("active");
                }, 300);
            });
            document.querySelector(".disclaimer .marqueePopup .head .icon").addEventListener("click", function () {
                document.querySelector(".disclaimer .marqueePopup").querySelector(".fwidth").classList.remove("active");
                setTimeout(function () {
                    document.querySelector(".disclaimer .marqueePopup").style.display = "none";
                }, 300);
            });
        })();
    }, []);
    return (
        <>
            <section className="disclaimer">
                <div className="container">
                    <div className="fw">
                        <span>Disclaimer:-</span>
                        <ul className="marquee">
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque, iste molestiae delectus 1.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque, iste molestiae delectus 2.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque, iste molestiae delectus 3.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque, iste molestiae delectus 4.</li>
                        </ul>
                        <i>Read More</i>
                    </div>
                </div>
                <div className="container marqueePopup">
                    <div className="fwidth">
                        <p className="head"><i className="icon">&#xe039;</i></p>
                        <ul className="lists"></ul>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Disclaimer;