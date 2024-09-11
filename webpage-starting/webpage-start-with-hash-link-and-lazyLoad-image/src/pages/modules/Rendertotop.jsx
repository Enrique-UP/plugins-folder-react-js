import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
function ScrollToTop({ children }) {
  const { pathname } = useLocation();
 
  useEffect(() => {
    //if (pathname != "/contact") window.scrollTo(0, 0);
    if (pathname) window.scrollTo(0, 0);
    // if (pathname) document.getElementById("menu").classList.remove("active");
    // if (pathname) document.getElementById("headerBottom").classList.remove("active");
  }, [pathname]);
 
  return children;
}
 
export default ScrollToTop;