import React from "react";
import IconButton from "@mui/material/IconButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { useMediaQuery, useTheme } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setMuted } from "../../redux/audioSlice";
import audioManager from "./audioManager";
import { keyframes } from "@emotion/react";

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
  const isMuted = useSelector((state) => state.audio.isMuted);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMdOrUp = useMediaQuery(theme.breakpoints.up("sm"));

  const toggleMute = () => {
    const newMuteState = !isMuted;
    dispatch(setMuted(newMuteState));
    if (!newMuteState) {
      audioManager.playBackground();
    } else {
      audioManager.stopBackground();
    }
    audioManager.playClick();
  };

  return (
    <>
      {isMdOrUp && (
        <IconButton
          onClick={toggleMute}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: "1.8rem",
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
