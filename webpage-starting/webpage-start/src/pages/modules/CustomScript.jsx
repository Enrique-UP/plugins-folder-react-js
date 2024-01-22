import { useEffect } from "react";
const CustomScript = ({children}) => {
    useEffect(() => {
        // document.querySelectorAll(".fw").forEach(function (e) {
        //     e.parentElement.classList.add("fwParent");
        // });
        document.querySelectorAll(".container .row [class*=col-] [class*=col-]").forEach(function (e) {
            e.parentElement.closest("[class*=col-]").style.marginBottom = 0;
        });
    }, []);
    return children;
}
export default CustomScript;