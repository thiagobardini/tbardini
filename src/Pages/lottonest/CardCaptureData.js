import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import * as Tesseract from "tesseract.js";
import { useDispatch } from "react-redux";
import { addTicket } from "../../redux/ticketSlice";

const CardCaptureData = () => {
  const webcamRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedNumbers, setCapturedNumbers] = useState([]);
  const [facingMode, setFacingMode] = useState("environment");

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
          timestamp: new Date(),
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
      <button onClick={capture}>Capture Numbers</button>
      <button onClick={toggleCamera}>
        {isCameraOpen ? "Close Camera" : "Open Camera"}
      </button>
      {isCameraOpen && <button onClick={flipCamera}>Flip Camera</button>}
      {capturedNumbers && (
        <div>
          <h3>Captured Numbers:</h3>
          {capturedNumbers.map((ticket, index) => (
            <p key={index}>
              Numbers: {ticket.numbers.join(", ")} - Mega Ball:{" "}
              {ticket.megaBall}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default CardCaptureData;
