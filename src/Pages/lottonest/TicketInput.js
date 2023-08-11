import React, { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";
import { addTicketToFirestore } from "./addTicketToFirestore"; // Atualize o caminho conforme necessário

const TicketInput = () => {
  const [numbers, setNumbers] = useState(Array(5).fill(""));
  const [megaBall, setMegaBall] = useState("");

  const handleNumberChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (numbers.every((num) => num) && megaBall) {
      await addTicketToFirestore(numbers, megaBall);
      alert("Ticket enviado com sucesso!");
      setNumbers(Array(5).fill(""));
      setMegaBall("");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <Container>
      <Typography variant="h6">Digite seus números e Mega Ball:</Typography>
      <form onSubmit={handleSubmit}>
        {numbers.map((number, index) => (
          <TextField
            key={index}
            required
            type="number"
            label={`Número ${index + 1}`}
            value={number}
            onChange={(e) => handleNumberChange(index, e.target.value)}
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
          Enviar Ticket
        </Button>
      </form>
    </Container>
  );
};

export default TicketInput;
