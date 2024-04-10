import React, { useRef, useCallback, useState, useEffect } from "react";
import Webcam from "react-webcam";
import * as Tesseract from "tesseract.js";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../../../redux/authSlices";
import { addTicket } from "../../../../redux/ticketSlice";
import {
  Typography,
  Stack,
  Button,
  Box,
  Divider,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { Edit, Cancel, Update, Delete, DeleteSweep } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import { styled, keyframes } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const dropAndBounceAnimation = keyframes`
  0% {
    transform: translateY(-100px);
  }
  80% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Ball = styled(Paper)`
  // padding: 10px;
  border-radius: 50%;
  margin: 0 5px;
  width: 30px;
  background-color: ${(props) => props.bgColor || "#f4d03f"};
  animation: ${dropAndBounceAnimation} 0.5s ease;
`;

const CardCaptureData = () => {
  const webcamRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(true);
  const [capturedNumbers, setCapturedNumbers] = useState([]);
  const [facingMode, setFacingMode] = useState("environment");
  const [sendTickets, setSendTickets] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);
  const [showNumberAlert, setShowNumberAlert] = useState(false);
  const [showMegaBallAlert, setShowMegaBallAlert] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const { uid } = useSelector(selectAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (sendTickets) {
      capturedNumbers.forEach((ticket) => {
        dispatch(addTicket(ticket));
      });
      setSendTickets(false); // Reset para não enviar novamente
    }
  }, [sendTickets, capturedNumbers, dispatch]);

  const capture = useCallback(() => {
    if (!isCameraOpen) return;

    const imageSrc = webcamRef.current.getScreenshot();
    Tesseract.recognize(imageSrc, "eng", {
      tessedit_char_whitelist: "0123456789",
    }).then(({ data: { text } }) => {
      const cleanedText = text.replace(/\D/g, "");
      const pairedNumbers = [];
      for (let i = 0; i < cleanedText.length; i += 2) {
        pairedNumbers.push(Number(cleanedText.slice(i, i + 2)));
      }

      const groupedNumbers = [];
      for (let i = 0; i < pairedNumbers.length; i += 6) {
        const group = pairedNumbers.slice(i, i + 6);
        if (group.length === 6) {
          groupedNumbers.push(group);
        }
      }

      groupedNumbers.forEach((group) => {
        const numbers = group.slice(0, 5);
        const megaBall = group[5];

        const ticket = {
          numbers,
          megaBall,
          timestamp: new Date().getTime(),
          userId: uid,
        };
        setCapturedNumbers((prevTickets) => [...prevTickets, ticket]);
        setIsCameraOpen(false);
      });
    });
  }, [webcamRef, isCameraOpen]);

  const toggleCamera = useCallback(() => {
    setIsCameraOpen(!isCameraOpen);
  }, [isCameraOpen]);

  const flipCamera = useCallback(() => {
    setFacingMode((prevMode) =>
      prevMode === "environment" ? "user" : "environment"
    );
  }, []);

  const videoConstraints = {
    facingMode: facingMode,
    width: window.innerWidth,
  };

  const handleEditTicket = (index) => {
    setEditingTicket({ ticket: capturedNumbers[index], index });
  };

  const handleUpdateTicket = () => {
    setShowAlert(true);
    if (
      editingTicket.ticket.numbers.some(
        (number) => number === "" || number === 0
      ) ||
      editingTicket.ticket.megaBall === "" ||
      editingTicket.ticket.megaBall === 0
    ) {
      return;
    }
    const updatedTickets = [...capturedNumbers];
    updatedTickets[editingTicket.index] = editingTicket.ticket;
    setCapturedNumbers(updatedTickets);
    setEditingTicket(null);
  };

  const handleDeleteTicket = (index) => {
    setCapturedNumbers((prevTickets) =>
      prevTickets.filter((_, i) => i !== index)
    );
  };

  const handleDeleteAllTickets = () => {
    setCapturedNumbers([]);
  };

  const handleSendAllTickets = () => {
    setSendTickets(true);
    capturedNumbers.forEach((ticket) => {
      dispatch(addTicket(ticket));
    });
    handleDeleteAllTickets();
  };

  const handleNumberInput = (value, numIndex) => {
    const number = value === "" ? "" : Number(value);
    if (number > 70) {
      setShowNumberAlert(true);
      return;
    }
    setShowNumberAlert(false);
    setEditingTicket({
      ...editingTicket,
      ticket: {
        ...editingTicket.ticket,
        numbers: editingTicket.ticket.numbers.map((n, i) =>
          i === numIndex ? number : n
        ),
      },
    });
  };

  const handleMegaBallInput = (value) => {
    const number = value === "" ? "" : Number(value);
    if (number > 25) {
      setShowMegaBallAlert(true);
      return;
    }
    setShowMegaBallAlert(false);
    setEditingTicket({
      ...editingTicket,
      ticket: {
        ...editingTicket.ticket,
        megaBall: number,
      },
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowMegaBallAlert(false);
    setShowNumberAlert(false);
    setShowAlert(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <>
      {isCameraOpen && (
        <Webcam
          ref={webcamRef}
          videoConstraints={videoConstraints}
          style={{ width: "100%" }}
        />
      )}
      <Box
        sx={{ display: "flex", justifyContent: "center", width: "100%", mb: 2 }}
      >
        <Button
          variant="text"
          color="info"
          sx={{ m: 1, textTransform: "none" }}
          onClick={toggleCamera}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {isCameraOpen ? <VideocamOffIcon /> : <PhotoCameraIcon />}
            {isCameraOpen ? "Close Cam" : "Open Cam"}
          </Stack>
        </Button>
        {isCameraOpen && (
          <Button
            variant="contained"
            color="info"
            sx={{
              m: 1,
              minWidth: 56,
              height: 100,
              width: 100,
              borderRadius: "50%",
              mx: 4,
            }}
            onClick={capture}
          >
            <PhotoCameraIcon />
          </Button>
        )}
        {isCameraOpen && (
          <Button
            variant="text"
            color="info"
            sx={{ m: 1, textTransform: "none" }}
            onClick={flipCamera}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <FlipCameraAndroidIcon />
              Flip Cam
            </Stack>
          </Button>
        )}
      </Box>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        mt={2}
      >
        {capturedNumbers.length > 0 && (
          <Box>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="h6" color="#d6d3d1" mb={2}>
              Captured Numbers
            </Typography>
            {capturedNumbers.map((ticket, index) => (
              <div key={index}>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-end"
                >
                  {ticket.numbers.map((number) => (
                    <Ball elevation={3} sx={{ backgroundColor: "#f4d03f" }}>
                      <Typography
                        variant="h6"
                        sx={{ color: "#000", textAlign: "center" }}
                      >
                        {number}
                      </Typography>
                    </Ball>
                  ))}
                  <Ball elevation={3} sx={{ backgroundColor: "#e74c3c" }}>
                    <Typography
                      variant="h6"
                      sx={{ color: "#000", textAlign: "center" }}
                    >
                      {ticket.megaBall}
                    </Typography>
                  </Ball>

                  <Stack direction="row" justifyContent="flex-start">
                    <Button
                      variant="text"
                      color="info"
                      size="small"
                      onClick={() => handleDeleteTicket(index)}
                    >
                      <Delete />
                    </Button>
                    <Button
                      variant="text"
                      color="info"
                      size="small"
                      onClick={() => handleEditTicket(index)}
                    >
                      <Edit />
                    </Button>
                  </Stack>
                </Stack>
                {editingTicket && editingTicket.index === index && (
                  <Box mb={2}>
                    <Typography color="#d6d3d1" mt={1}>
                      Editing Numbers:
                    </Typography>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {editingTicket.ticket.numbers.map((number, numIndex) => (
                        <input
                          key={numIndex}
                          type="tel"
                          value={number}
                          min="1"
                          max="70"
                          required
                          onInput={(e) =>
                            handleNumberInput(e.target.value, numIndex)
                          }
                          style={{ width: "40px" }}
                        />
                      ))}
                      <Box sx={{ mx: 2 }}>
                        <input
                          type="tel"
                          value={editingTicket.ticket.megaBall}
                          min="1"
                          max="25"
                          required
                          onInput={(e) => handleMegaBallInput(e.target.value)}
                          style={{ width: "40px" }}
                        />
                      </Box>
                      <Button
                        variant="text"
                        color="info"
                        size="small"
                        onClick={handleUpdateTicket}
                      >
                        <Update fontSize="small" />
                      </Button>
                      <Button
                        variant="text"
                        color="info"
                        size="small"
                        onClick={() => setEditingTicket(null)}
                      >
                        <Cancel fontSize="small" />
                      </Button>
                    </div>
                  </Box>
                )}
              </div>
            ))}
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="flex-end"
              spacing={2}
              mt={2}
            >
              <Button
                variant="contained"
                color="info"
                size="small"
                onClick={handleDeleteAllTickets}
                sx={{ textTransform: "none" }}
              >
                <DeleteSweep fontSize="small" />
                Clean All Captured
              </Button>
              <Button
                variant="contained"
                color="info"
                size="small"
                onClick={handleSendAllTickets}
                startIcon={<SendIcon />}
                sx={{ textTransform: "none" }}
              >
                Send All Captured
              </Button>
            </Stack>
          </Box>
        )}
      </Stack>

      {showNumberAlert && (
        <Snackbar
          open={showNumberAlert}
          autoHideDuration={3000}
          onClose={() => setShowNumberAlert(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          action={action}
        >
          <Alert severity="error">
            The number must be less than or equal to 70!
          </Alert>
        </Snackbar>
      )}

      {showMegaBallAlert && (
        <Snackbar
          open={showMegaBallAlert}
          autoHideDuration={3000}
          onClose={() => setShowMegaBallAlert(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          action={action}
        >
          <Alert severity="error">
            The Mega Ball must be less than or equal to 25!
          </Alert>
        </Snackbar>
      )}
      {showAlert && (
        <Snackbar
          open={showAlert}
          autoHideDuration={3000}
          onClose={() => setShowAlert(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          severity="error"
          action={action}
        >
          <Alert severity="error">All numbers must be filled in!</Alert>
        </Snackbar>
      )}
    </>
  );
};

export default CardCaptureData;
