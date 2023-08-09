import React, { useState, useEffect } from "react";
import {
  ToggleButton,
  Container,
  Typography,
  Box,
  Button,
  Divider,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import tickets from "./tickets.json";

const CheckNumbers = () => {
  const [drawnNumbers, setDrawnNumbers] = useState([]);
  const [megaBall, setMegaBall] = useState(null);
  const [isMegaBallDialogOpen, setMegaBallDialogOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [isTicketsDialogOpen, setTicketsDialogOpen] = useState(false);

  useEffect(() => {
    if (drawnNumbers.length === 5) {
      setMegaBallDialogOpen(true);
    }
  }, [drawnNumbers]);

  useEffect(() => {
    handleCheck();
  }, [drawnNumbers, megaBall]);

  const handleCheck = () => {
    const newResults = tickets
      .map((ticket) => {
        const matches = ticket.numbers.filter((num) =>
          drawnNumbers.includes(num)
        );
        const hasMegaBallMatch = megaBall === ticket.megaBall;
        return {
          ticketId: ticket.id,
          matchingNumbers: matches,
          count: matches.length,
          megaBallMatch: hasMegaBallMatch,
        };
      })
      .filter((result) => result.count > 0 || result.megaBallMatch)
      .sort((a, b) => b.count - a.count);

    setResults(newResults);
  };

  const handleNumberSelect = (_, newNumbers) => {
    setDrawnNumbers(newNumbers);
  };

  const handleMegaBallSelect = (num) => {
    setMegaBall(num);
    setMegaBallDialogOpen(false);
  };

  const resetGame = () => {
    setDrawnNumbers([]);
    setMegaBall(null);
    setResults([]);
  };

  const handleTicketsDialogOpen = () => {
    setTicketsDialogOpen(true);
  };

  return (
    <Container>
      <Box
        my={2}
        style={{
          backgroundColor: "#34495e",
          borderRadius: "5px",
          padding: "8px",
        }}
      >
        <Typography variant="h6" align="center" style={{ color: "#d6d3d1" }}>
          Winning Numbers
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" my={2}>
          <Typography
            variant="h4"
            component="h3"
            style={{ color: "#d6d3d1", fontWeight: "bold" }}
          >
            {drawnNumbers.join(", ")}
          </Typography>
          <Typography
            variant="h4"
            component="h3"
            style={{ color: "#d6d3d1", fontWeight: "bold" }}
          >
            {megaBall && `(Mega Ball: ${megaBall})`}
          </Typography>
        </Box>
      </Box>

      {!megaBall && (
        <Box my={2}>
          <Typography variant="h6">Enter the 5 Drawn Numbers:</Typography>
          <ToggleButtonGroup
            value={drawnNumbers}
            onChange={handleNumberSelect}
            multiple
            style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
          >
            {[...Array(70)].map((_, index) => (
              <ToggleButton
                key={index}
                value={index + 1}
                style={{
                  color: megaBall ? "#d6d3d1" : "#22313f",
                  backgroundColor: megaBall ? "#424242" : "#d6d3d1",
                }}
              >
                {index + 1}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      )}
      <Dialog
        open={isMegaBallDialogOpen}
        onClose={() => setMegaBallDialogOpen(false)}
      >
        <DialogTitle>Select your Mega Ball number</DialogTitle>
        <DialogContent style={{ backgroundColor: "#34495e" }}>
          <DialogContentText style={{ color: "#d6d3d1" }}>
            Choose one number from the list as your Mega Ball:
          </DialogContentText>
          {[...Array(70)].map((_, index) => (
            <Button
              key={index}
              onClick={() => handleMegaBallSelect(index + 1)}
              style={{ color: "#d6d3d1" }}
            >
              {index + 1}
            </Button>
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setMegaBallDialogOpen(false)}
            style={{ color: "#d6d3d1" }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Box my={2} display="flex" justifyContent="center">
        <Button color="primary" variant="contained" onClick={resetGame}>
          {megaBall ? "New Game" : "Clear Selection"}
        </Button>
      </Box>
      <Divider />
      <Box my={2}>
        <Box
          my={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">Matching Tickets:</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleTicketsDialogOpen}
          >
            View All Tickets
          </Button>
        </Box>
        <Dialog
          open={isTicketsDialogOpen}
          onClose={() => setTicketsDialogOpen(false)}
          maxWidth="md"
        >
          <DialogTitle>All Your Tickets</DialogTitle>
          <DialogContent>
            {tickets.map((ticket) => (
              <Box key={ticket.id} mb={2}>
                <Typography color="#eeeeee">
                  Ticket {ticket.id}: {ticket.numbers.join(", ")} (Mega Ball:{" "}
                  {ticket.megaBall})
                </Typography>
              </Box>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setTicketsDialogOpen(false)} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

        {results.map((result) => (
          <Paper
            elevation={3}
            style={{
              padding: "16px",
              margin: "8px 0",
              backgroundColor: "#282524",
            }}
          >
            <Typography color="#eeeeee" variant="h6">
              Ticket {result.ticketId}: {result.matchingNumbers.join(", ")}
              {result.megaBallMatch && ` (Mega Ball Match: ${megaBall})`}
            </Typography>
            <Typography color="secondary">
              (Total Matches: {result.count})
            </Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default CheckNumbers;
