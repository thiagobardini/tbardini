import React, { useState } from "react";
import {
  Button,
  Typography,
  Box,
  Grid,
  CssBaseline,
  Stack,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlices";
import { addTicket } from "../../redux/ticketSlice";
import { NumberBall, MegaBall } from "./BallNumbers";

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
      alert("Please select 5 numbers and 1 Mega Ball.");
    }
  };

  const clearSelectionNumbers = () => {
    setNumbers([]);
  };

  const clearSelectionMegaBall = () => {
    setMegaBall(null);
  };

  return (
    <Box>
      <CssBaseline />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
            spacing={2}
          >
            <Box>
              <Typography color="#d6d3d1" variant="h6">
                Numbers
              </Typography>
              <Typography variant="subtitle2" color="#d6d3d1">
                Selected 5 numbers
              </Typography>
            </Box>
            <Button
              variant="text"
              color="info"
              size="small"
              onClick={clearSelectionNumbers}
              sx={{ textTransform: "none" }}
            >
              Clear Board
            </Button>
          </Stack>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              border: "2px solid #1976d2",
              borderRadius: "10px",
              padding: 1,
              maxWidth: "420px",
              justifyContent: "center",
            }}
          >
            {Array.from({ length: 70 }, (_, index) => (
              <NumberBall
                number={index + 1}
                onClick={() => handleNumberClick(index + 1)}
                color={numbers.includes(index + 1) ? "#f4d03f" : "#f7f7f7"}
                disabled={numbers.length >= 5 && !numbers.includes(index + 1)}
              />
            ))}
          </Box>
        </Grid>
        <Grid item>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
            spacing={2}
          >
            <Box>
              <Typography color="#d6d3d1" variant="h6">
                Mega Ball
              </Typography>
              <Typography variant="subtitle2" color="#d6d3d1">
                Selected 1 mega ball
              </Typography>
            </Box>
            <Button
              variant="text"
              color="info"
              size="small"
              onClick={clearSelectionMegaBall}
              sx={{ textTransform: "none" }}
            >
              Clear Board
            </Button>
          </Stack>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              border: "2px solid #1976d2",
              borderRadius: "10px",
              padding: 1,
              maxWidth: "420px",
              justifyContent: "center",
            }}
          >
            {Array.from({ length: 70 }, (_, index) => (
              <MegaBall
                number={index + 1}
                onClick={() => handleMegaBallClick(index + 1)}
                selected={megaBall === index + 1}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
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
          sx={{ ml: 1, textTransform: "none" }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default TicketInput;
