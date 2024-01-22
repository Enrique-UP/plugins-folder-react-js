import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname){
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.getElementById("menu").classList.remove("active");
      document.getElementById("headerBottom").classList.remove("active");
    }
  }, [pathname]);
  return children;
}
 
export default ScrollToTop;