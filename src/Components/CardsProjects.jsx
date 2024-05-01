import React from "react";
import Lottie from "lottie-react";
import { Card, CardActions, CardContent, CardMedia, Stack, Typography, Box, Chip, Tooltip } from "@mui/material";
import redux from "../Assets/icons/icons8-redux-an-open-source-javascript-library-for-managing-application-state-30.png";
// import javascript from "../Assets/icons/icons8-javascript.json";
import javascript from "../Assets/icons/icons8-javascript-30.png";
import react from "../Assets/icons/icons8-react-30.png";
import materialui from "../Assets/icons/materialui-original.svg?url";
import reactThree from "../Assets/icons/Threejs-logo.svg?url";
import gemini from "../Assets/icons/google-gemini-icon.png";
import i18n from "../Assets/icons/i18n.png";
import rtkQuery from "../Assets/icons/rtk-query.svg?url";
import firebase from "../Assets/icons/firebase-30.png";
import expressjs from "../Assets/icons/express-js-30.png";
import nodejs from "../Assets/icons/icons8-nodejs-30.png";
import stripe from "../Assets/icons/icons8-stripe-30.png";
import sass from "../Assets/icons/icons8-sass-30.png";
import globalLinkGO from "../Assets/icons/globalLinkGO.png";
import playwright from "../Assets/icons/playwright-logo.png";
import nextjs from "../Assets/icons/icons8-next.js-30.png";
import typescript from "../Assets/icons/icons8-typescript-30.png";
import mongodb from "../Assets/icons/icons8-mongodb-30.png";
import prisma from "../Assets/icons/icons8-prisma-orm-30.png";

const techIcons = {
  reactjs: react,
  javascript: javascript,
  "redux toolkit": redux,
  "material-ui": materialui,
  "react three js": reactThree,
  "gemini-ai": gemini,
  i18n: i18n,
  "rtk query": rtkQuery,
  firebase: firebase,
  "express js": expressjs,
  "node js": nodejs,
  "stripe": stripe,
  sass: sass,
  "globallink go": globalLinkGO,
  playwright: playwright,
  "next js": nextjs,
  typescript: typescript,
  mongodb: mongodb,
  prisma: prisma,
};

const CardsProjects = ({ id, title, description, subtitle, img, techs, height }) => {
  return (
    <Box key={id}>
      <Card
        sx={{
          height: "100%",
          position: "relative",
          cursor: "pointer",
          objectFit: "cover",
          backgroundPosition: " center center",
          backgroundRepeat: "no-repeat",

          display: "flex",
          alignItems: "flex-end",
          borderRadius: "11px",
          breakInside: "avoid",
        }}
      >
        <CardMedia
          component='img'
          alt={title}
          image={img}
          sx={{
            width: "100%",
            // maxWidth: "770px",
            minWidth: "273px",
            objectFit: "cover",
            height: { xs: "100%", md: height },
            minHeight: { xs: "350px", height: "none" },
            maxHeight: { xs: "500px", height: "none" },
          }}
        />

        <CardContent
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            opacity: { xs: 1, md: 1 },
            background: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))",
            transition: "opacity 0.3s ease-in-out, background 0.3s ease-in-out",
            "&:hover": {
              opacity: 1,
              background: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))",
            },
          }}
        >
          <Typography
            gutterBottom
            variant='h6'
            component='div'
            color='#eeeeee'
            sx={{
              fontFamily: "GothamSSm-Bold",
              textTransform: "capitalize",
            }}
          >
            <div style={{ display: "inline-block", backdropFilter: "blur(10px)" }}>{title}</div>
          </Typography>
          <Typography variant='body2' color='#eeeeee' mb={2} component='div'>
            <div style={{ display: "inline-block", backdropFilter: "blur(10px)" }}>{subtitle}</div>
          </Typography>

          <Stack
            mb={2}
            direction='row'
            sx={{
              flexWrap: "wrap",
              gap: "10px",
              rowGap: "8px",
            }}
          >
            {techs.map((tech, index) => {
              const techKey = tech.toLowerCase()
              const TechIcon = techIcons[techKey];

              return TechIcon ? (
                <Tooltip key={index} title={tech}>
                  <img src={TechIcon} alt={tech} style={{ height: "30px", width: "auto" }} />
                </Tooltip>
              ) : (
                <Chip
                  key={index}
                  label={tech}
                  size='small'
                  color='secondary'
                  sx={{
                    textTransform: "capitalize",
                    fontFamily: "GothamSSm-Light",
                  }}
                />
              );
            })}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardsProjects;
