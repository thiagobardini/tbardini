import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Button, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CardsDrawer from "../Components/CardsDrawer";
import projectsCards from "../Data/projectsCards";
import CardsPortfolio from "../Components/CardsPortfolio";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "var(--bgColor-2)" : grey[800],
}));

const StyledBoxDrawer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 10,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const BottomDrawer = ({ color }) => {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "projects")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProjects(newData);
      console.log(projects, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Root>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(72% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Box></Box>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            height: "56px",
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Box sx={{ textTransform: "visible", textAlign: "center" }}>
            <Button
              onClick={toggleDrawer(!open)}
              sx={{
                pointerEvents: "visible",
                visibility: "none",
                height: "65px",
                // position: !open ? "absolute" : "relative",
                position: "absolute",
                textTransform: "none",
              }}
            >
              <Typography color="#000">{!open ? "open" : "close"}</Typography>

              <Puller />
            </Button>
          </Box>
          <Typography sx={{ pb: 2, pl: 2, color: "#000" }}>
            {projects?.length} projects
          </Typography>
        </StyledBox>
        <StyledBoxDrawer
          sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Container component="main" maxWidth="xs">
            {projects.length > 0 ? (
              projects.map((project) => (
                <CardsDrawer
                  id={project.id}
                  projectCard={project}
                  toggleDrawer={toggleDrawer()}
                />
              ))
            ) : (
              <span>No Post</span>
            )}

            {projectsCards.map((card) => (
              <CardsPortfolio
                id={card.id}
                title={card.title}
                description={card.description}
                img={card.img}
                techs={card.techs}
                readme={card.readme}
                live={card.live}
                github={card.github}
              />
            ))}
          </Container>
        </StyledBoxDrawer>
      </SwipeableDrawer>
    </Root>
  );
};

export default BottomDrawer;
