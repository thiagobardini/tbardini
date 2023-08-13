import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  db,
  auth,
  onAuthStateChanged,
  collection,
  query,
  getDocs,
  where,
} from "../../Firebase/firebaseConfig";
import { addTicket } from "../../redux/ticketSlice"; // Certifique-se de que essa ação esteja definida em sua slice
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
  Link,
} from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import tickets from "./tickets.json";
import TicketInput from "./TicketInput";
import CardCaptureData from "./CardCaptureData";

const CheckNumbers = () => {
  const [drawnNumbers, setDrawnNumbers] = useState([]);
  const [megaBall, setMegaBall] = useState(null);
  const [isMegaBallDialogOpen, setMegaBallDialogOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [isTicketsDialogOpen, setTicketsDialogOpen] = useState(false);
  const [manualEntry, setManualEntry] = useState(true);

  const currentUser = auth.currentUser; // Use o objeto 'auth' importado, não 'firebase.auth()'

  const ticketsFirestore = useSelector((state) => state.tickets.tickets);
  const dispatch = useDispatch();

  const handleCheck = useCallback(() => {
    console.log(ticketsFirestore, "ticketsFirestore");
    const newResults = ticketsFirestore
      .map((ticket) => {
        const matches = ticket.numbers
          ? ticket.numbers.filter((num) => drawnNumbers.includes(num))
          : [];

        const hasMegaBallMatch = megaBall === ticket.megaBall;
        return {
          ticketId: ticket.id,
          matchingNumbers: matches, // Isso sempre será um array
          count: matches.length,
          megaBallMatch: hasMegaBallMatch,
        };
      })
      .filter((result) => result.count > 0 || result.megaBallMatch)
      .sort((a, b) => b.count - a.count);

    console.log("newResults", newResults);
    setResults(newResults);
  }, [ticketsFirestore, drawnNumbers, megaBall]);

  useEffect(() => {
    if (currentUser) {
      // Utilize as funções importadas diretamente, em vez de 'firebase.firestore()'
      const ticketsCollection = collection(db, "tickets");
      const q = query(
        ticketsCollection,
        where("userId", "==", currentUser.uid)
      );
      getDocs(q).then((querySnapshot) => {
        const userTickets = querySnapshot.docs.map((doc) => doc.data());
        // Atualize o estado ou a loja Redux aqui
        // Por exemplo, usando o Redux:
        // dispatch(updateTickets(userTickets));
      });
    }
  }, [currentUser]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userTicketsCollection = collection(db, "tickets");
        // Substitua o 'where' importado corretamente aqui, se necessário
        const q = query(
          userTicketsCollection /*, where("userId", "==", user.uid)*/
        );
        getDocs(q).then((querySnapshot) => {
          const userTickets = querySnapshot.docs.map((doc) => doc.data());
          // Faça algo com os ingressos, como adicioná-los ao estado
        });
      }
    });

    return () => unsubscribe(); // Limpar inscrição na desmontagem
  }, []);

  useEffect(() => {
    if (drawnNumbers.length === 5) {
      setMegaBallDialogOpen(true);
    }
  }, [drawnNumbers]);

  useEffect(() => {
    handleCheck();
  }, [drawnNumbers, megaBall, handleCheck]);

  const handleNumberSelect = (_, newNumbers) => {
    setDrawnNumbers(newNumbers);
    console.log(drawnNumbers, "drawnNumbers");
  };

  const handleMegaBallSelect = (number) => {
    setMegaBall(number);
    setMegaBallDialogOpen(false);
  };
  // const userTickets = querySnapshot.docs.map((doc) => doc.data());
  // Atualize o estado ou a loja Redux aqui
  // Por exemplo, usando o Redux:
  // dispatch(updateTickets(userTickets));

  const resetGame = () => {
    setDrawnNumbers([]);
    setMegaBall(null);
    setResults([]);
  };

  const handleTicketsDialogOpen = () => {
    setTicketsDialogOpen(true);
  };

  const addNewTicket = (ticket) => {
    const ticketWithUser = { ...ticket, userId: currentUser.uid };
    dispatch(addTicket(ticketWithUser));
  };

  const toggleManualEntry = () => {
    setManualEntry(!manualEntry);
  };
  return (
    <Box>
      <Container>
        <Box
          my={2}
          style={{
            backgroundColor: "#34495e",
            borderRadius: "5px",
            padding: "8px",
          }}
        >
          <button onClick={toggleManualEntry}>
            {manualEntry
              ? "Switch to Camera Capture"
              : "Switch to Manual Entry"}
          </button>
          {manualEntry ? <TicketInput /> : <CardCaptureData />}

          <Typography variant="h6" align="center" style={{ color: "#d6d3d1" }}>
            Winning Numbers
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" my={2}>
            <Typography
              variant="h4"
              component="h3"
              style={{ color: "#d6d3d1", fontWeight: "bold" }}
            >
              {drawnNumbers && drawnNumbers.join(", ")}
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
            <Box
              sx={{
                mb: 1,
                display: {
                  xs: "block",
                  md: "flex",
                },
                alignItems: "center",
                justifyContent: "center",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Typography variant="h6" display="inline" mr={1}>
                Enter the 5 Drawn Numbers:
              </Typography>
              <Box component="div">
                <Link
                  href="https://www.megamillions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  color="secondary"
                >
                  Check Drawn Numbers
                </Link>
              </Box>
            </Box>
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
            <DialogTitle sx={{ color: "#eeeeee" }}>
              All Your Tickets
            </DialogTitle>
            <DialogContent>
              {ticketsFirestore.map((ticket) => (
                <Box key={ticket.id} mb={2}>
                  <Typography color="#eeeeee">
                    {/* Ticket {ticket.id}: {ticket.numbers.join(", ")} (Mega Ball:{" "} */}
                    {ticket.megaBall})
                  </Typography>
                </Box>
              ))}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setTicketsDialogOpen(false)}>
                <Typography sx={{ color: "#eeeeee" }}>Close</Typography>
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
              {/* {console.log(result, "resultado")} */}
              <Typography color="#eeeeee" variant="h6">
                Ticket {result.ticketId}:{" "}
                {result.matchingNumbers
                  ? result.matchingNumbers.join(", ")
                  : ""}
                {result.megaBallMatch && ` (Mega Ball Match: ${megaBall})`}
              </Typography>

              <Typography color="secondary">
                (Total Matches: {result.count})
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CheckNumbers;
