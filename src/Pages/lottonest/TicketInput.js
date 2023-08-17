import React, { useState } from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlices";
import { addTicket } from "../../redux/ticketSlice";
import { NumberBall, MegaBall } from "./BallNumbers";
import ClearIcon from "@mui/icons-material/Clear";

const TicketInput = () => {
  const [numbers, setNumbers] = useState([]);
  const [megaBall, setMegaBall] = useState(null);

  const { uid } = useSelector(selectAuth);

  const dispatch = useDispatch();

  const handleNumberClick = (value) => {
    if (numbers.length < 5 && !numbers.includes(value)) {
      setNumbers([...numbers, value]);
    }
  };

  const handleMegaBallClick = (value) => {
    console.log("Mega Ball Clicked:", value);
    setMegaBall(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (numbers.length === 5 && megaBall !== null) {
      const ticket = {
        numbers,
        megaBall,
        timestamp: new Date(),
        userId: uid,
      };

      await dispatch(addTicket(ticket));

      alert("Ticket sent successfully!");
      setNumbers([]);
      setMegaBall(null);
    } else {
      alert("Please select 5 numbers and a Mega Ball.");
    }
  };

  const clearSelectionNumbers = () => {
    setNumbers([]);
  };

  const clearSelectionMegaBall = () => {
    setMegaBall(null);
  };

  return (
    <Container>
      <Box sx={{ mt: 1 }}>
        <Typography color="#d6d3d1" variant="h6">
          Select your numbers:
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          border: "2px solid #1976d2",
          borderRadius: "10px",
          padding: 2,
        }}
      >
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            startIcon={<ClearIcon />}
            variant="outlined"
            color="info"
            size="small"
            onClick={clearSelectionNumbers}
          >
            Clear Selection
          </Button>
        </Box>
        {Array.from({ length: 70 }, (_, index) => (
          <NumberBall
            number={index + 1}
            onClick={() => handleNumberClick(index + 1)}
            color={numbers.includes(index + 1) ? "#f4d03f" : "#f7f7f7"}
          />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <Typography color="#d6d3d1" variant="h6">
          Select your Mega Ball:
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          border: "2px solid #1976d2",
          borderRadius: "10px",
          padding: 2,
        }}
      >
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            startIcon={<ClearIcon />}
            variant="outlined"
            color="info"
            size="small"
            onClick={clearSelectionMegaBall}
          >
            Clear Selection
          </Button>
        </Box>
        {Array.from({ length: 70 }, (_, index) => (
          <MegaBall
            number={index + 1}
            onClick={() => handleMegaBallClick(index + 1)}
            selected={megaBall === index + 1}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "center",
          mt: 2,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <NumberBall
            number={numbers[index] || "?"}
            color={numbers[index] ? "#f4d03f" : "#f4d03f"}
            hoverable={false}
            height="40px"
            width="40px"
          />
        ))}
        <MegaBall
          number={megaBall || "?"}
          selected={megaBall !== null}
          hoverable={false}
          color={megaBall ? "#e74c3c" : "#caf0f6"}
          height="40px"
          width="40px"
        />
        <Button
          type="submit"
          variant="contained"
          color="info"
          onClick={handleSubmit}
          sx={{ ml: 1 }}
        >
          Send Ticket
        </Button>
      </Box>
    </Container>
  );
};

export default TicketInput;
