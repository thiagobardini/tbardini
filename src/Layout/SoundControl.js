import React, { useState, useEffect, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { Howl } from "howler";
import { keyframes } from "@emotion/react";
import { Paper, Button } from "@mui/material";
import { useMediaQuery } from "react-responsive";

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

const SoundControl = () => {
  const [isMuted, setIsMuted] = useState(
    localStorage.getItem("audioPermission") === "granted"
  );
  const [permission, setPermission] = useState(
    localStorage.getItem("audioPermission") || "pending"
  );
  const backgroundSound = useRef(null);
  const clickSound = useRef(null);
  const isDesktop = useMediaQuery({ minDeviceWidth: 1024 });

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
  }, [permission, isMuted]);

  const grantPermission = () => {
    setPermission("granted");
    localStorage.setItem("audioPermission", "granted");
  };

  const denyPermission = () => {
    setPermission("denied");
    localStorage.setItem("audioPermission", "denied");
  };

  return (
    <>
      {isDesktop /* Render only on desktop */ && permission === "pending" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper elevation={3} sx={{ py: 5, px: 3, borderRadius: 3, mb: 5 }}>
            <div
              style={{
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <p>
                This site requires your permission to enhance user experience.
                Do you agree?
              </p>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={grantPermission}
                sx={{ mr: 2 }}
              >
                Allow
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={denyPermission}
              >
                Close
              </Button>
            </div>
          </Paper>
        </div>
      )}
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
    </>
  );
};

export default SoundControl;
