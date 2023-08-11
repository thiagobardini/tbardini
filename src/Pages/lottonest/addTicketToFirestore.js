import { db, collection, addDoc } from "../../Firebase/firebaseConfig";

const ticketsCollection = collection(db, "tickets");

export const addTicketToFirestore = async (numbers, megaBall) => {
  try {
    const docRef = await addDoc(ticketsCollection, {
      numbers,
      megaBall,
      timestamp: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const addCardCaptureDataToFirestore = async (groupedNumbers) => {
  try {
    const docRef = await addDoc(ticketsCollection, {
      groupedNumbers,
      timestamp: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
