import React, { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTicket } from "../../redux/ticketSlice";

const TicketInput = () => {
  const [numbers, setNumbers] = useState(Array(5).fill(""));
  const [megaBall, setMegaBall] = useState("");

  const dispatch = useDispatch();

  const handleNumberChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = parseInt(value, 10);
    setNumbers(newNumbers);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (numbers.every((num) => num) && megaBall) {
      const ticket = {
        numbers,
        megaBall,
        timestamp: new Date(),
      };

      // Add the ticket to Firestore and Redux Toolkit
      await dispatch(addTicket(ticket));

      alert("Ticket sent successfully!");
      setNumbers(Array(5).fill(""));
      setMegaBall("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <Container>
      <Typography variant="h6">Enter your numbers and Mega Ball:</Typography>
      <form onSubmit={handleSubmit}>
        {numbers.map((number, index) => (
          <TextField
            key={index}
            required
            type="number"
            label={`Number ${index + 1}`}
            value={number}
            onChange={(e) =>
              handleNumberChange(index, parseInt(e.target.value, 10))
            }
          />
        ))}
        <TextField
          required
          type="number"
          label="Mega Ball"
          value={megaBall}
          onChange={(e) => setMegaBall(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Send Ticket
        </Button>
      </form>
    </Container>
  );
};

export default TicketInput;
