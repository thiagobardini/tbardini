import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import RouterPlannerReadme from "../Pages/projects/RouterPlanner/RouterPlannerReadme";

const drawerBleeding = 56;

const Root = styled(Box)(({ theme }) => ({
  height: "100%",
}));

const StyledBoxDrawer = styled(Box)(({ theme }) => ({
  color: "#f7f7f7",
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 10,
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const BottomDrawer = ({ color }) => {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  const darkMode = useSelector((state) => state.theme.darkMode);

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
        <Box
          sx={{
            height: "56px",
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
            background: darkMode ? "#f7f7f7" : "#2A2A2A",
          }}
        >
          <Box sx={{ textTransform: "visible", textAlign: "center" }}>
            <Button
              onClick={toggleDrawer(!open)}
              sx={{
                pointerEvents: "visible",
                visibility: "none",
                height: "65px",
                position: "relative",
                textTransform: "none",
                color: darkMode ? "#2A2A2A" : "#f7f7f7",
              }}
            >
              <Typography color={darkMode ? "#2A2A2A" : "#f7f7f7"}>
                {!open ? "open docs" : "close docs"}
              </Typography>

              <Puller sx={{ background: darkMode ? "#2A2A2A" : "#f7f7f7" }} />
            </Button>
          </Box>
        </Box>
        <StyledBoxDrawer
          sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            backgroundColor: darkMode ? grey[900] : grey[800],
          }}
        >
          <RouterPlannerReadme displayNone="true" />
        </StyledBoxDrawer>
      </SwipeableDrawer>
    </Root>
  );
};

export default BottomDrawer;
