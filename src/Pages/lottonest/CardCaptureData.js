import React, { useRef, useCallback, useState, useEffect } from "react";
import Webcam from "react-webcam";
import * as Tesseract from "tesseract.js";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlices";
import { addTicket } from "../../redux/ticketSlice";
import { Typography, Stack, Button, Box, Divider } from "@mui/material";
import { Edit, Cancel, Update, Delete, DeleteSweep } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";

const CardCaptureData = () => {
  const webcamRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(true);
  const [capturedNumbers, setCapturedNumbers] = useState([]);
  const [facingMode, setFacingMode] = useState("environment");
  const [sendTickets, setSendTickets] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);

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
      {capturedNumbers.length > 0 && (
        <Box>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h6">Captured Numbers</Typography>
          {capturedNumbers.map((ticket, index) => (
            <div key={index}>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-end"
                spacing={2}
              >
                <Typography mt={1} color="#d6d3d1">
                  Numbers: {ticket.numbers.join(", ")} - Mega Ball:{" "}
                  {ticket.megaBall}
                </Typography>
                <Button
                  variant="outlined"
                  color="info"
                  size="small"
                  onClick={() => handleDeleteTicket(index)}
                >
                  <Delete fontSize="small" />
                </Button>
                <Button
                  variant="outlined"
                  color="info"
                  size="small"
                  onClick={() => handleEditTicket(index)}
                >
                  <Edit fontSize="small" />
                </Button>
              </Stack>
              {editingTicket && editingTicket.index === index && (
                <div>
                  <Typography mt={2} color="#d6d3d1">
                    Editing Numbers:
                  </Typography>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {editingTicket.ticket.numbers.map((number, numIndex) => (
                      <input
                        key={numIndex}
                        type="number"
                        value={number}
                        min="1"
                        max="70"
                        onChange={(e) =>
                          setEditingTicket({
                            ...editingTicket,
                            ticket: {
                              ...editingTicket.ticket,
                              numbers: editingTicket.ticket.numbers.map(
                                (n, i) =>
                                  i === numIndex ? Number(e.target.value) : n
                              ),
                            },
                          })
                        }
                        style={{ width: "40px" }}
                      />
                    ))}
                    <Box sx={{ mx: 2 }}>
                      <input
                        type="number"
                        value={editingTicket.ticket.megaBall}
                        min="1"
                        max="25"
                        onChange={(e) =>
                          setEditingTicket({
                            ...editingTicket,
                            ticket: {
                              ...editingTicket.ticket,
                              megaBall: Number(e.target.value),
                            },
                          })
                        }
                        style={{ width: "40px" }}
                      />
                    </Box>
                    <Button
                      variant="outlined"
                      color="info"
                      size="small"
                      onClick={handleUpdateTicket}
                    >
                      <Update fontSize="small" />
                    </Button>
                    <Button
                      variant="outlined"
                      color="info"
                      size="small"
                      onClick={() => setEditingTicket(null)}
                    >
                      <Cancel fontSize="small" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            spacing={2}
          >
            <Button
              variant="contained"
              color="info"
              size="small"
              onClick={handleDeleteAllTickets}
              sx={{ mt: 2 }}
            >
              <DeleteSweep fontSize="small" />
              <Typography sx={{ ml: 1, textTransform: "none" }}>
                {" "}
                Clean All Captured
              </Typography>
            </Button>
            <Button
              variant="contained"
              color="info"
              size="small"
              onClick={handleSendAllTickets}
              startIcon={<SendIcon />}
            >
              Send All Captured
            </Button>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default CardCaptureData;
