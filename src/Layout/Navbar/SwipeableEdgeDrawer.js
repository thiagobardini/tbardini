import React, { useEffect, useState } from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Button, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// import CardProject from "../components/CardProject";
// import Link from "next/link";

// const getDataAll = async () => {
//   const res = await fetch(`http://localhost:3000/api/blogdata`);
//   return res.json();
// };

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light" ? "var(--bgColor-4)" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const SwipeableEdgeDrawer = ({ color }) => {
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await getDataAll();
  //       setPosts(data);
  //     };

  //     fetchData();
  //   }, []);

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
      <Box>
        {/* FIXME: Redux */}
        <Button
          component={Link}
          to="/projects"
          sx={{
            color: "white",
            margin: 0,
            padding: 0,
            fontSize: "14px",
            my: 2,
            display: "block",
          }}
          onClick={toggleDrawer(true)}
        >
          <Typography>Projects</Typography>
        </Button>
      </Box>
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
              sx={{ pointerEvents: "visible", visibility: "none" }}
            >
              <Puller />
            </Button>
          </Box>
          <Typography sx={{ pb: 2, pl: 2, color: "text.secondary" }}>
            {/* {posts?.data?.length} projects */}
            projects
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            pt: 2,
            height: "100%",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "var(--bgColor-3)",
          }}
        >
          {/* <div className="text-white ">
            <div className="px-100 flex justify-center items-center">
              {posts?.data ? (
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={2}
                  sx={{ flexWrap: "wrap" }}
                >
                  {posts.data.map((post, index) => (
                  <CardProject
                    cardsBox={posts}
                    toggleDrawer={toggleDrawer(false)}
                  />
                   ))} 
                </Stack>
              ) : (
                "No Post"
              )}
            </div>
          </div> */}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
};

export default SwipeableEdgeDrawer;
