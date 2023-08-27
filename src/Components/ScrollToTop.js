import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(-20, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
