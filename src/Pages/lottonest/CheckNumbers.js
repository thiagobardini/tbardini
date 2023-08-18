import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateMatchingTickets } from "../../redux/matchingTicketsSlice";
import useFetch from "../../Hooks/useFetch";
import {
  db,
  auth,
  onAuthStateChanged,
  collection,
  query,
  getDocs,
  where,
} from "../../Firebase/firebaseConfig";
import { Typography, Box, Paper, Link, Container } from "@mui/material";
import { styled, keyframes } from "@mui/system";

const dropAndBounceAnimation = keyframes`
  0% {
    transform: translateY(-100px);
  }
  80% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Ball = styled(Paper)`
  padding: 10px;
  borderradius: 50%;
  margin: 0 5px;
  width: 50px;
  backgroundcolor: ${(props) => props.bgColor || "#f4d03f"};
  animation: ${dropAndBounceAnimation} 0.5s ease;
`;

const CheckNumbers = () => {
  const [drawnNumbers, setDrawnNumbers] = useState([]);
  const [megaBall, setMegaBall] = useState(null);
  const [drawingDate, setDrawingDate] = useState(null);
  const [jackPot, setJackPot] = useState(null);

  const { get, loading } = useFetch("https://mega-millions.p.rapidapi.com");

  const currentUser = auth.currentUser; // Use o objeto 'auth' importado, não 'firebase.auth()'

  const ticketsFirestore = useSelector((state) => state.tickets.tickets);

  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleCheck = useCallback(() => {
    console.log(ticketsFirestore, "ticketsFirestore");
    const newResults = ticketsFirestore
      .map((ticket) => {
        const matches = ticket.numbers
          ? ticket.numbers.filter((num) => drawnNumbers.includes(num))
          : [];

        const hasMegaBallMatch = megaBall === ticket.megaBall;
        return {
          ticketId: ticket.ticketId,
          matchingNumbers: matches,
          count: matches.length,
          megaBallMatch: hasMegaBallMatch,
        };
      })
      .filter((result) => result.count > 0 || result.megaBallMatch)
      .sort((a, b) => b.count - a.count);

    console.log("newResults", newResults);

    dispatch(updateMatchingTickets({ results: newResults, megaBall }));
  }, [
    ticketsFirestore,
    drawnNumbers,
    megaBall,
    jackPot,
    drawingDate,
    dispatch,
  ]);

  useEffect(() => {
    if (currentUser) {
      const ticketsCollection = collection(db, "tickets");
      const q = query(
        ticketsCollection,
        where("userId", "==", currentUser.uid)
      );
      getDocs(q).then((querySnapshot) => {
        const userTickets = querySnapshot.docs.map((doc) => doc.data());
      });
    }
  }, [currentUser, dispatch]);

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
    handleCheck();
  }, [drawnNumbers, megaBall, jackPot, drawingDate, handleCheck]);

  useEffect(() => {
    get("/latest")
      .then((data) => {
        const numbers = data.data[0].NumberSet.split(" ")
          .slice(0, -2)
          .map(Number);
        const megaBallNumber = Number(
          data.data[0].NumberSet.split(" ").slice(-2, -1)
        );

        if (drawnNumbers.length === 0) {
          setDrawnNumbers(numbers);
          setMegaBall(megaBallNumber);
          setDrawingDate(data.data[0].DrawingDate);
          setJackPot(data.data[0].JackPot);
        }

        console.log(drawnNumbers, "drawnNumbers");
        console.log(jackPot, "jackPot");
      })
      .catch((error) => console.error(error));
  });

  return (
    <Paper
      elevation={3}
      sx={{ backgroundColor: darkMode ? "#0A2B4C" : "#5CABE5" }}
    >
      <Container>
        <Box mt={2}>
          <Box>
            <Typography
              variant="h4"
              align="center"
              sx={{ color: "#d6d3d1", fontWeight: 900 }}
            >
              Winning Numbers
            </Typography>
            {loading ? (
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Loading...
              </Typography>
            ) : (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt={2}
              >
                <Box display="flex" alignItems="center" my={1}>
                  {drawnNumbers.map((number) => (
                    <Ball
                      elevation={3}
                      sx={{
                        backgroundColor: "#f4d03f",
                        padding: "10px",
                        borderRadius: "50%",
                        margin: "0 5px",
                        width: "50px",
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{ color: "#000", textAlign: "center" }}
                      >
                        {number}
                      </Typography>
                    </Ball>
                  ))}

                  <Ball
                    elevation={3}
                    sx={{
                      backgroundColor: "#e74c3c",
                      padding: "10px",
                      borderRadius: "50%",
                      margin: "0 5px",
                      width: "50px",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ color: "#000", textAlign: "center" }}
                    >
                      {megaBall}
                    </Typography>
                  </Ball>
                </Box>
                <Typography
                  variant="h6"
                  component="h6"
                  style={{ color: "#d6d3d1", fontWeight: "bold" }}
                  my={2}
                >
                  {drawingDate &&
                    `Date: ${new Date(drawingDate).toLocaleDateString()}`}{" "}
                  <br />
                  {jackPot && `JackPot: ${jackPot}`}
                </Typography>
              </Box>
            )}
          </Box>
          <Link
            href="https://www.megamillions.com/"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="#d6d3d1"
          >
            <Typography variant="subtitle2">Check Drawn Numbers</Typography>
          </Link>
        </Box>
      </Container>
    </Paper>
  );
};

export default CheckNumbers;
