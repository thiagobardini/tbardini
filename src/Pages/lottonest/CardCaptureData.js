import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import * as Tesseract from "tesseract.js";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlices";
import { addTicket } from "../../redux/ticketSlice";
import { Typography, Button, Box } from "@mui/material";

const CardCaptureData = () => {
  const webcamRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedNumbers, setCapturedNumbers] = useState([]);
  const [facingMode, setFacingMode] = useState("environment");

  const { uid } = useSelector(selectAuth);

  const dispatch = useDispatch();

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

      // Agrupa os números em conjuntos de 6
      const groupedNumbers = [];
      for (let i = 0; i < pairedNumbers.length; i += 6) {
        const group = pairedNumbers.slice(i, i + 6);
        if (group.length === 6) {
          // Verifica se o grupo tem exatamente 6 números
          groupedNumbers.push(group);
        }
      }

      console.log(
        "Numbers as pairs of two grouped into arrays:",
        groupedNumbers
      );

      // Processa cada grupo de números
      groupedNumbers.forEach((group) => {
        const numbers = group.slice(0, 5);
        const megaBall = group[5];

        const ticket = {
          numbers,
          megaBall,
          timestamp: new Date().getTime(),
          userId: uid,
        };
        console.log(
          "TICKET - Numbers as pairs of two grouped into arrays:",
          ticket
        );
        setCapturedNumbers((prevTickets) => [...prevTickets, ticket]);

        dispatch(addTicket(ticket));
      });
    });
  }, [webcamRef, isCameraOpen, dispatch]);

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

  return (
    <>
      {isCameraOpen && (
        <Webcam
          ref={webcamRef}
          videoConstraints={videoConstraints}
          style={{ width: "100%" }}
        />
      )}
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Button variant="outlined" color="info" sx={{ m: 1 }} onClick={capture}>
          Capture Numbers
        </Button>
        <Button
          variant="outlined"
          color="info"
          sx={{ m: 1 }}
          onClick={toggleCamera}
        >
          {isCameraOpen ? "Close Camera" : "Open Camera"}
        </Button>
        {isCameraOpen && (
          <Button
            variant="outlined"
            color="info"
            sx={{ m: 1 }}
            onClick={flipCamera}
          >
            Flip Camera
          </Button>
        )}
      </Box>
      {capturedNumbers && (
        <div>
          <Typography variant="h6" mt={2} color="#d6d3d1">
            Captured Numbers:
          </Typography>
          {capturedNumbers.map((ticket, index) => (
            <Typography mt={2} color="#d6d3d1" key={index}>
              Numbers: {ticket.numbers.join(", ")} - Mega Ball:{" "}
              {ticket.megaBall}
            </Typography>
          ))}
        </div>
      )}
    </>
  );
};

export default CardCaptureData;
