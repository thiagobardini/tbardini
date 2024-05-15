import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { styled, Typography, Button, Box, Popper, Fade, ClickAwayListener, TextField, Drawer, IconButton, Divider } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import LoadingDots from "../LoadingDots";
import chatbot from "/chatbotai.svg?url";
import user from "/userchat.svg?url";
import email from "/email.svg?url";
import emailDark from "/email-dark.svg?url";
import emailDisabledDark from "/email-disabled-dark.svg?url";
import CloseIcon from "@mui/icons-material/Close";
import Lottie from "lottie-react";
import Chatting from "./animation/Chatting-white.json";

const ChatDiv = styled(Box)({
  "::-webkit-scrollbar": {
    width: "10px",
  },
  "::-webkit-scrollbar-track": {
    // backgroundColor: 'background.paper',
  },
  "::-webkit-scrollbar-thumb": {
    // backgroundColor: 'background.paper',
    borderRadius: "10px",
    border: "2px solid #ffffff",
  },
});

const ChatBox = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [msg, setMsg] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const chatBoxRef = useRef(null);
  const drawerRef = useRef(null);
  const buttonRef = useRef(null);

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));

  const API_URL = import.meta.env.VITE_VERCEL_API_URL || "http://localhost:3000"; // API URL

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(
          <Typography component='span' variant='body2' sx={{ mb: 1, fontWeight: "bold", display: "inline" }}>
            <img src={chatbot} alt='Chat Icon' style={{ width: 28, height: 28, marginRight: "7px", position: "relative", top: "5px" }} />
            <span>Oops, something went wrong. How can I assist you further?</span>
          </Typography>
        );
      }, 5000);
    }
  }, [error]);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatHistory]);

  useEffect(() => {
    if (open && drawerRef.current) {
      drawerRef.current.setAttribute("tabIndex", "-1");
    }
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    setChatHistory([]);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  const handleAIClick = () => {
    setOpen((prevOpen) => !prevOpen);
    if (!open) {
      setAnchorEl(buttonRef.current);
    }
  };
  const handleTextFieldFocus = () => {
    if (drawerRef.current) {
      drawerRef.current.focus();
    }
  };

  const getResponse = async () => {
    if (!msg) {
      setError(
        <Typography component='span' variant='body2' sx={{ mb: 1, fontWeight: "bold", display: "inline" }}>
          <img src={chatbot} alt='Chat Icon' style={{ width: 28, height: 28, marginRight: "7px", position: "relative", top: "5px" }} />
          <span>Please enter a message before sending.</span>
        </Typography>
      );
      return;
    }

    setChatHistory((oldChatHistory) => [...oldChatHistory, { role: "user", parts: msg }]);

    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/chat-with-gemini`, {
        method: "POST",
        body: JSON.stringify({
          message: msg,
          history: [],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.text();

      if (!data || data.trim() === "") {
        setChatHistory((oldChatHistory) => [
          ...oldChatHistory,
          {
            role: "AI",
            parts: (
              <Typography component='span' variant='body2' sx={{ mb: 1, fontWeight: "bold", display: "inline" }}>
                <span>It seems there was an error in processing your request. Could you please rephrase your question to focus on aspects of Thiago Bardini's professional career?</span>
              </Typography>
            ),
          },
        ]);
      } else {
        setChatHistory((oldChatHistory) => [...oldChatHistory, { role: "AI", parts: data }]);
      }

      setMsg("");
    } catch (error) {
      setError(
        <Typography component='span' variant='body2' sx={{ mb: 1, fontWeight: "bold", display: "inline" }}>
          <img src={chatbot} alt='Chat Icon' style={{ width: 28, height: 28, marginRight: "7px", position: "relative", top: "5px" }} />
          <span>Sorry, there was a problem processing your request.</span>
        </Typography>
      );
      setChatHistory([]);
    } finally {
      setIsLoading(false);
    }
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  const renderChatContent = () => (
    <Box>
      <Box sx={{ px: 2, pt: 2 }}>
        <Typography gutterBottom variant='h6' component='div'>
          How can I help you?
        </Typography>
        <IconButton
          onClick={handleCloseDrawer}
          sx={{
            position: "absolute",
            right: { xs: 10, md: 20 },
            top: 8,
            padding: 1,
            color: (theme) => theme.palette.grey[500],
          }}
          aria-label='close'
        >
          <CloseIcon />
        </IconButton>
        <Divider />
      </Box>
      <ChatDiv ref={chatBoxRef} sx={{ maxHeight: "50vh", m: 1, overflow: "auto", px: 2, pb: 2 }}>
        <Typography variant='subtitle2' sx={{ mb: 2, fontWeight: 600 }} gutterBottom>
          {error ? (
            error
          ) : (
            <Typography component='span' variant='body2' sx={{ mb: 1, fontWeight: "bold", display: "inline" }}>
              <img src={chatbot} alt='Chat Icon' style={{ width: 28, height: 28, marginRight: "7px", position: "relative", top: "5px" }} />
              <span>I am an AI designed to help you with questions about Thiago Bardini's professional endeavors.</span>
            </Typography>
          )}
        </Typography>
        <Box sx={{ mb: 2 }}>
          {chatHistory.map((chatItem, _index) => (
            <Box key={_index} sx={{ mb: 2 }}>
              {chatItem.role === "AI" ? (
                <Typography component='span' variant='body2' sx={{ mb: 1, fontWeight: "bold", display: "inline" }}>
                  <img src={chatbot} alt='Robot Icon' style={{ width: 28, height: 28, marginRight: "7px", position: "relative", top: "5px" }} />
                  <Typography component='span' variant='body2' sx={{ display: "inline" }}>
                    {chatItem.parts}
                  </Typography>
                </Typography>
              ) : (
                <Typography component='span' variant='body2' sx={{ mb: 1, fontWeight: "bold", display: "inline" }}>
                  <img src={user} alt='user icon' style={{ width: 20, height: 20, marginRight: "11px", position: "relative", top: "2px", left: "3px" }} />
                  <Typography component='span' variant='body2' sx={{ display: "inline" }}>
                    {chatItem.parts}
                  </Typography>
                </Typography>
              )}
            </Box>
          ))}
          {isLoading && <LoadingDots />}
        </Box>
      </ChatDiv>

      <Box sx={{ pl: 2, pb: 2, pr: 1, display: "flex", alignItems: "center", width: "100%" }}>
        <TextField
          color='chat'
          label='Ask a question...'
          fullWidth={true}
          value={msg}
          size='small'
          InputProps={{
            onFocus: handleTextFieldFocus,
          }}
          onChange={(e) => setMsg(e.target.value)}
          InputLabelProps={{
            sx: {
              color: darkMode ? "#eeeeee" : "#34495e",
              "& label.Mui-focused": {
                color: "#d6d3d1",
              },
              "& .MuiInputBase-input": {
                fontSize: "0.875rem",
                mt: 0.5,
              },
            },
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && msg.trim()) {
              e.preventDefault();
              getResponse();
            }
          }}
        />

        <IconButton disabled={!msg.trim()} sx={{ color: darkMode ? "#eeeeee" : "#34495e" }} aria-label='send' onClick={getResponse}>
          {!msg.trim() ? (
            <img src={emailDisabledDark} alt='user icon' style={{ width: 20, height: 20 }} />
          ) : !darkMode ? (
            <img src={emailDark} alt='user icon' style={{ width: 20, height: 20 }} />
          ) : (
            <img src={email} alt='user icon' style={{ width: 20, height: 20 }} />
          )}
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Button
        ref={buttonRef}
        aria-describedby={id}
        onClick={handleAIClick}
        variant='contained'
        sx={{
          width: "50px !important",
          height: "60px !important",
          position: "fixed",
          right: 10,
          bottom: 5,
          p: 0,
          textTransform: "none",
          borderRadius: "100%",
          zIndex: 2,
          backgroundColor: "rgba(204, 204, 204, 0.8)",
          border: darkMode ? "1px solid #282524" : "1px solid #282524",
          "&:hover": {
            backgroundColor: "#d6d3d1 !important",
            border: darkMode ? "1px solid #282524" : "1px solid #282524",
          },
        }}
      >
        <Lottie
          animationData={Chatting}
          style={{
            height: "45px",
            width: "45px",
          }}
        />
      </Button>
      {isMedium ? (
        <Popper id={id} open={open} anchorEl={anchorEl} transition placement='top-end' disablePortal={false} display={{ xs: "none", sm: "block" }} sx={{ zIndex: 1300, pb: 2 }}>
          {({ TransitionProps }) => (
            <ClickAwayListener onClickAway={handleClose}>
              <Fade in={open} {...TransitionProps} timeout={350}>
                <Box sx={{ maxWidth: { xs: "90vw", md: "40vw" }, mx: 2, border: 2, borderRadius: "10px", bgcolor: "background.box" }}>{renderChatContent()}</Box>
              </Fade>
            </ClickAwayListener>
          )}
        </Popper>
      ) : (
        <Drawer
          ref={drawerRef}
          anchor='bottom'
          open={open}
          onClose={handleCloseDrawer}
          PaperProps={{
            sx: {
              zIndex: 1300,
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            },
          }}
        >
          <Box sx={{ borderTop: 3, borderLeft: 3, borderRight: 3, bgcolor: "background.chat", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>{renderChatContent()}</Box>
        </Drawer>
      )}
    </Box>
  );
};

export default ChatBox;
