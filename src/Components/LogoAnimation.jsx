import React, { useState, useEffect } from "react";
import tbLogo from "../Assets/animations/tb-logo.gif";
import { Box } from "@mui/material";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const LogoAnimation = ({ height, pathname }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [pathname]);

  return <Box component='img' alt='logoCircle' src={`${tbLogo}?${key}`} sx={{ height: { height }, animation: `${fadeIn} 1s ease-in-out forwards` }} />;
};

export default LogoAnimation;
