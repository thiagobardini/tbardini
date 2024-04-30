import React, { useState, useEffect, Suspense } from "react";
import tbLogoRotation from "../Assets/animations/tb-logo-150px.gif";
import tbLogoGlasses from "../Assets/animations/tb-logo-glasses.gif";
import { Box, Fade } from "@mui/material";
import Loading from "./Loading";

const LogoAnimation = ({ height, pathname }) => {
  const [key, setKey] = useState(0);
  const [showGlasses, setShowGlasses] = useState(true);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
    // Alternar explicitamente para o oposto do estado atual
    console.log(key);
    setShowGlasses(!showGlasses);
    console.log("Pathname changed:", pathname);
    console.log("Show Glasses:", showGlasses);
  }, [pathname]);

  return (
    <Suspense fallback={<Loading />}>
      <Fade in={true} timeout={1000}>
        {showGlasses ? (
          <Box component='img' alt='logo' src={`${tbLogoRotation}?${key}`} sx={{ height: { height } }} />
        ) : (
          <Box component='img' alt='logo' src={`${tbLogoGlasses}?${key}`} sx={{ height: { height } }} />
        )}
      </Fade>
    </Suspense>
  );
};

export default LogoAnimation;
