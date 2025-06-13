import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  styled,
  Typography,
  Button,
  Box,
  Popper,
  Fade,
  ClickAwayListener,
  TextField,
  Drawer,
  IconButton,
  Divider,
} from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { keyframes } from "@emotion/react";
import LoadingDots from "../LoadingDots";
import chatbot from "/chatbotai.svg?url";
import user from "/userchat.svg?url";
import email from "/email.svg?url";
import emailDark from "/email-dark.svg?url";
import emailDisabledDark from "/email-disabled-dark.svg?url";
import CloseIcon from "@mui/icons-material/Close";
import Lottie from "lottie-react";
import Chatting from "./animation/Chatting-white.json";
import { track } from "@vercel/analytics";
import { useLocation, useNavigate } from "react-router-dom"; // added import

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.4);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(102, 126, 234, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(102, 126, 234, 0);
  }
`;

const ChatDiv = styled(Box)(({ theme }) => ({
  "::-webkit-scrollbar": {
    width: "8px",
  },
  "::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.mode === 'dark' 
      ? "rgba(102, 126, 234, 0.3)" 
      : "rgba(102, 126, 234, 0.2)",
    borderRadius: "10px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.mode === 'dark' 
        ? "rgba(102, 126, 234, 0.5)" 
        : "rgba(102, 126, 234, 0.3)",
    },
  },
}));

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

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"; // API URL

  const location = useLocation(); // added hook to get current location
  const navigate = useNavigate(); // added hook to navigate

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(
          <Typography
            component="span"
            variant="body2"
            sx={{ mb: 1, fontWeight: "bold", display: "inline" }}
          >
            <img
              src={chatbot}
              alt="Chat Icon"
              style={{
                width: 28,
                height: 28,
                marginRight: "7px",
                position: "relative",
                top: "5px",
              }}
            />
            <span>
              Oops, something went wrong. How can I assist you further?
            </span>
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

  useEffect(() => {
    // wait until buttonRef is assigned to avoid null anchorEl
    if (!buttonRef.current) return;

    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("chat") === "true") {
      setAnchorEl(buttonRef.current);
      setOpen(true);
    }
  }, [location.search]);

  const handleClose = () => {
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.delete("chat");
    navigate({
      pathname: location.pathname,
      search: newSearchParams.toString(),
    });
    setOpen(false);
    setChatHistory([]);
  };

  const handleCloseDrawer = () => {
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.delete("chat");
    navigate({
      pathname: location.pathname,
      search: newSearchParams.toString(),
    });
    setOpen(false);
  };

  const handleAIClick = () => {
    const newSearchParams = new URLSearchParams(location.search);
    if (!open) {
      newSearchParams.set("chat", "true");
      navigate({
        pathname: location.pathname,
        search: newSearchParams.toString(),
      });
      setAnchorEl(buttonRef.current);
    } else {
      newSearchParams.delete("chat");
      navigate({
        pathname: location.pathname,
        search: newSearchParams.toString(),
      });
    }
    setOpen((prevOpen) => !prevOpen);
    track("Chat Button Clicked", { location: "bottom-right" });
  };

  const handleTextFieldFocus = () => {
    if (drawerRef.current) {
      drawerRef.current.focus();
    }
  };

  const getResponse = async () => {
    if (!msg) {
      setError(
        <Typography
          component="span"
          variant="body2"
          sx={{ mb: 1, fontWeight: "bold", display: "inline" }}
        >
          <img
            src={chatbot}
            alt="Chat Icon"
            style={{
              width: 28,
              height: 28,
              marginRight: "7px",
              position: "relative",
              top: "5px",
            }}
          />
          <span>Please enter a message before sending.</span>
        </Typography>
      );
      return;
    }

    setChatHistory((oldChatHistory) => [
      ...oldChatHistory,
      { role: "user", parts: msg },
    ]);

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
              <Typography
                component="span"
                variant="body2"
                sx={{ mb: 1, fontWeight: "bold", display: "inline" }}
              >
                <span>
                  It seems there was an error in processing your request. Could
                  you please rephrase your question to focus on aspects of
                  Thiago Bardini's professional career?
                </span>
              </Typography>
            ),
          },
        ]);
      } else {
        setChatHistory((oldChatHistory) => [
          ...oldChatHistory,
          { role: "AI", parts: data },
        ]);
      }

      track("Message Sent", { message: msg }); // Track message sent
      setMsg("");
    } catch (error) {
      setError(
        <Typography
          component="span"
          variant="body2"
          sx={{ mb: 1, fontWeight: "bold", display: "inline" }}
        >
          <img
            src={chatbot}
            alt="Chat Icon"
            style={{
              width: 28,
              height: 28,
              marginRight: "7px",
              position: "relative",
              top: "5px",
            }}
          />
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
      <Box sx={{ px: 3, pt: 3, pb: 2, position: "relative" }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div"
          sx={{
            fontFamily: "GothamSSm-Bold",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          How can I help you?
        </Typography>
        <IconButton
          onClick={handleCloseDrawer}
          sx={{
            position: "absolute",
            right: { xs: 10, md: 20 },
            top: 15,
            padding: 1,
            color: darkMode ? "#eeeeee" : "#667eea",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: darkMode 
                ? "rgba(102, 126, 234, 0.1)" 
                : "rgba(102, 126, 234, 0.05)",
              color: "#667eea",
            },
          }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <Divider sx={{ 
          mt: 2,
          borderColor: darkMode 
            ? "rgba(102, 126, 234, 0.2)" 
            : "rgba(102, 126, 234, 0.1)" 
        }} />
      </Box>
      <ChatDiv
        ref={chatBoxRef}
        sx={{ 
          maxHeight: "50vh", 
          mx: 1, 
          overflow: "auto", 
          px: 3, 
          pb: 2,
          borderRadius: "12px",
          backgroundColor: darkMode 
            ? "rgba(255, 255, 255, 0.02)" 
            : "rgba(102, 126, 234, 0.01)",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ mb: 2, fontWeight: 600 }}
          gutterBottom
        >
          {error ? (
            error
          ) : (
            <Typography
              component="span"
              variant="body2"
              sx={{ mb: 1, fontWeight: "bold", display: "inline" }}
            >
              <img
                src={chatbot}
                alt="Chat Icon"
                style={{
                  width: 28,
                  height: 28,
                  marginRight: "7px",
                  position: "relative",
                  top: "5px",
                }}
              />
              <span>
                I am an AI designed to help you with questions about Thiago
                Bardini's professional endeavors.
              </span>
            </Typography>
          )}
        </Typography>
        <Box sx={{ mb: 2 }}>
          {chatHistory.map((chatItem, _index) => (
            <Box key={_index} sx={{ mb: 2 }}>
              {chatItem.role === "AI" ? (
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ mb: 1, fontWeight: "bold", display: "inline" }}
                >
                  <img
                    src={chatbot}
                    alt="Robot Icon"
                    style={{
                      width: 28,
                      height: 28,
                      marginRight: "7px",
                      position: "relative",
                      top: "5px",
                    }}
                  />
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ display: "inline" }}
                  >
                    {chatItem.parts}
                  </Typography>
                </Typography>
              ) : (
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ mb: 1, fontWeight: "bold", display: "inline" }}
                >
                  <img
                    src={user}
                    alt="user icon"
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: "11px",
                      position: "relative",
                      top: "2px",
                      left: "3px",
                    }}
                  />
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ display: "inline" }}
                  >
                    {chatItem.parts}
                  </Typography>
                </Typography>
              )}
            </Box>
          ))}
          {isLoading && <LoadingDots />}
        </Box>
      </ChatDiv>

      <Box
        sx={{
          px: 3,
          pb: 3,
          pt: 1,
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: 1,
        }}
      >
        <TextField
          label="Ask a question..."
          fullWidth={true}
          value={msg}
          size="small"
          InputProps={{
            onFocus: handleTextFieldFocus,
            sx: {
              borderRadius: "12px",
              backgroundColor: darkMode 
                ? "rgba(255, 255, 255, 0.05)" 
                : "rgba(102, 126, 234, 0.03)",
              "&:hover": {
                backgroundColor: darkMode 
                  ? "rgba(255, 255, 255, 0.08)" 
                  : "rgba(102, 126, 234, 0.05)",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: darkMode 
                  ? "rgba(102, 126, 234, 0.2)" 
                  : "rgba(102, 126, 234, 0.15)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: darkMode 
                  ? "rgba(102, 126, 234, 0.3)" 
                  : "rgba(102, 126, 234, 0.25)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#667eea",
                borderWidth: "1px",
              },
            },
          }}
          onChange={(e) => setMsg(e.target.value)}
          InputLabelProps={{
            sx: {
              color: darkMode ? "#eeeeee" : "#667eea",
              "&.Mui-focused": {
                color: "#667eea",
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

        <IconButton
          disabled={!msg.trim()}
          sx={{ 
            color: !msg.trim() 
              ? (darkMode ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)")
              : "#667eea",
            backgroundColor: !msg.trim()
              ? "transparent"
              : darkMode 
                ? "rgba(102, 126, 234, 0.1)" 
                : "rgba(102, 126, 234, 0.05)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: !msg.trim()
                ? "transparent"
                : darkMode 
                  ? "rgba(102, 126, 234, 0.2)" 
                  : "rgba(102, 126, 234, 0.1)",
              transform: !msg.trim() ? "none" : "scale(1.1)",
            },
            "&:disabled": {
              color: darkMode ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
            },
          }}
          aria-label="send"
          onClick={getResponse}
        >
          {!msg.trim() ? (
            <img
              src={emailDisabledDark}
              alt="user icon"
              style={{ width: 20, height: 20 }}
            />
          ) : !darkMode ? (
            <img
              src={emailDark}
              alt="user icon"
              style={{ width: 20, height: 20 }}
            />
          ) : (
            <img
              src={email}
              alt="user icon"
              style={{ width: 20, height: 20 }}
            />
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
        variant="contained"
        sx={{
          width: "60px !important",
          height: "60px !important",
          position: "fixed",
          right: 20,
          bottom: 20,
          p: 0,
          textTransform: "none",
          borderRadius: "50%",
          zIndex: 1000,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          boxShadow: darkMode 
            ? "0 8px 32px rgba(102, 126, 234, 0.5)" 
            : "0 8px 32px rgba(102, 126, 234, 0.3)",
          border: "none",
          transition: "all 0.3s ease",
          animation: !open ? `${pulse} 2s infinite` : "none",
          "&:hover": {
            background: "linear-gradient(135deg, #5a67d8 0%, #6b46a3 100%)",
            transform: "translateY(-2px)",
            boxShadow: darkMode 
              ? "0 12px 40px rgba(102, 126, 234, 0.6)" 
              : "0 12px 40px rgba(102, 126, 234, 0.4)",
          },
        }}
      >
        <Lottie
          animationData={Chatting}
          style={{
            height: "50px",
            width: "50px",
            filter: darkMode ? "brightness(1.2)" : "brightness(1)",
          }}
        />
      </Button>
      {isMedium ? (
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          transition
          placement="top-end"
          disablePortal={false}
          display={{ xs: "none", sm: "block" }}
          sx={{ zIndex: 1300, pb: 2 }}
        >
          {({ TransitionProps }) => (
            <ClickAwayListener onClickAway={handleClose}>
              <Fade in={open} {...TransitionProps} timeout={350}>
                <Box
                  sx={{
                    maxWidth: { xs: "90vw", md: "40vw" },
                    mx: 2,
                    borderRadius: "20px",
                    bgcolor: darkMode ? "rgba(30, 30, 30, 0.95)" : "rgba(255, 255, 255, 0.98)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid",
                    borderColor: darkMode 
                      ? "rgba(102, 126, 234, 0.2)" 
                      : "rgba(102, 126, 234, 0.1)",
                    boxShadow: darkMode
                      ? "0 20px 60px rgba(102, 126, 234, 0.3)"
                      : "0 20px 60px rgba(102, 126, 234, 0.15)",
                  }}
                >
                  {renderChatContent()}
                </Box>
              </Fade>
            </ClickAwayListener>
          )}
        </Popper>
      ) : (
        <Drawer
          ref={drawerRef}
          anchor="bottom"
          open={open}
          onClose={handleCloseDrawer}
          PaperProps={{
            sx: {
              zIndex: 1300,
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
              bgcolor: darkMode ? "rgba(30, 30, 30, 0.98)" : "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(20px)",
              border: "1px solid",
              borderColor: darkMode 
                ? "rgba(102, 126, 234, 0.2)" 
                : "rgba(102, 126, 234, 0.1)",
              borderBottom: "none",
              boxShadow: "0 -10px 40px rgba(102, 126, 234, 0.2)",
            },
          }}
        >
          <Box>
            {renderChatContent()}
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default ChatBox;
