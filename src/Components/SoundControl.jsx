import React, { useState, useEffect, useRef, forwardRef } from "react";
import IconButton from "@mui/material/IconButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { Howl } from "howler";
import { keyframes } from "@emotion/react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SoundControl = () => {
  const theme = useTheme();
  const isMdOrUp = useMediaQuery(theme.breakpoints.up("md"));

  const [open, setOpen] = useState(true);
  const [isMuted, setIsMuted] = useState(
    localStorage.getItem("audioPermission") === "granted"
  );
  const [permission, setPermission] = useState(
    localStorage.getItem("audioPermission") || "pending"
  );

  const backgroundSound = useRef(null);
  const clickSound = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);

    if (isMuted) {
      backgroundSound.current.play();
      localStorage.setItem("audioPermission", "granted");
      setPermission("granted");
    } else {
      backgroundSound.current.stop();
      localStorage.setItem("audioPermission", "denied");
      setPermission("denied");
    }

    clickSound.current.play();
  };

  useEffect(() => {
    // Singleton Pattern
    if (!backgroundSound.current) {
      backgroundSound.current = new Howl({
        src: ["/summer-sound-fixed.mp3"],
        loop: false,
      });
    }

    if (!clickSound.current) {
      clickSound.current = new Howl({
        src: ["/enable-sound.mp3"],
      });
    }

    if (permission === "granted" && !isMuted) {
      backgroundSound.current.play();
    } else if (permission === "denied") {
      setIsMuted(true);
    }

    // Stop sound if screen width is less than "md"
    if (!isMdOrUp) {
      backgroundSound.current.stop();
    }
  }, [permission, isMuted, isMdOrUp]);

  const grantPermission = () => {
    setPermission("granted");
    localStorage.setItem("audioPermission", "granted");
    setOpen(true);
  };

  const denyPermission = () => {
    setPermission("denied");
    localStorage.setItem("audioPermission", "denied");
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {isMdOrUp && permission === "pending" && (
        <div>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Do you agree?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                This site requires your permission to enhance user experience.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="info" onClick={denyPermission}>
                Disagree
              </Button>
              <Button variant="info" onClick={grantPermission}>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
      {isMdOrUp && (
        <IconButton
          onClick={toggleMute}
          sx={{
            position: "fixed",
            bottom: 10,
            left: 10,
            zIndex: "1300",
            fontSize: "2rem",
            "& .MuiSvgIcon-root": {
              fontSize: "2rem",
              animation: `${pulse} 2s infinite ease-in-out`,
              animationPlayState: isMuted ? "paused" : "running",
            },
          }}
        >
          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
      )}
    </>
  );
};

export default SoundControl;
