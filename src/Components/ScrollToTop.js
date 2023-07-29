import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(-10, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
