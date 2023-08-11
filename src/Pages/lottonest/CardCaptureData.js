import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import * as Tesseract from "tesseract.js";
import { addCardCaptureDataToFirestore } from "./addTicketToFirestore";

function CardCaptureData() {
  const webcamRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedNumbers, setCapturedNumbers] = useState(null);
  const [facingMode, setFacingMode] = useState("environment");

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
        groupedNumbers.push(pairedNumbers.slice(i, i + 6));
      }

      console.log(
        "Numbers as pairs of two grouped into arrays:",
        groupedNumbers
      );
      setCapturedNumbers(groupedNumbers);

      // Enviar os números agrupados para o Firestore
      addCardCaptureDataToFirestore(groupedNumbers);
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
          {capturedNumbers.map((group, index) => (
            <p key={index}>{group.join(", ")}</p>
          ))}
        </div>
      )}
    </>
  );
}

export default CardCaptureData;
