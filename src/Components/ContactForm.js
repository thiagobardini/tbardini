import { useState } from "react";
import { useSelector } from "react-redux";
import { keyframes } from "@emotion/react";
import {
  TextField,
  Box,
  Typography,
  Link,
  Stack,
  CircularProgress,
} from "@mui/material";
import { db } from "../Firebase/firebaseConfig"; // Import the initialized Firestore instance
import { collection, addDoc } from "firebase/firestore";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const ContactInfo = ({ darkMode, fadeIn }) => (
  <Box sx={{ mt: 3, animation: `${fadeIn} 3s`, position: "relative" }}>
    <Typography
      variant="h6"
      sx={{
        mb: 1,
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      Feel free to get in touch!
    </Typography>
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Link
        href="mailto:thiagobardini@icloud.com?subject=👨🏻‍💻 Hi Thiago, I'd like to hire you"
        color="inherit"
        underline="none"
        target="_blank"
      >
        <ContactIconText
          icon={
            <EmailIcon
              sx={{
                color: darkMode ? "#eeeeee" : "#222831",
              }}
            />
          }
          text="thiagobardini@icloud.com"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/thiagobardini/"
        color="inherit"
        underline="none"
        target="_blank"
      >
        <ContactIconText
          icon={
            <LinkedInIcon
              sx={{
                color: darkMode ? "#eeeeee" : "#222831",
              }}
            />
          }
          text="LinkedIn"
        />
      </Link>
    </Stack>
  </Box>
);

const ContactIconText = ({ icon, text }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // my: 1,
    }}
  >
    <Box sx={{ mr: 0.5 }}>{icon}</Box>
    {text}
  </Box>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    setLoading(true);

    try {
      const emailsCollection = collection(db, "emails");
      await addDoc(emailsCollection, {
        name,
        email,
        message,
      });

      alert("Message has been submitted 👍");
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "770px", minWidth: "273px" }}>
      <ContactInfo darkMode={darkMode} fadeIn={fadeIn} />

      <Box
        component="form"
        onSubmit={handleSendEmail}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          value={formData.name}
          onChange={handleInputChange}
          required
          sx={{ width: "100%" }}
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={handleInputChange}
          required
          sx={{ width: "100%" }}
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          multiline
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          required
          sx={{ width: "100%" }}
        />
        <Box
          sx={{ display: "flex", justifyContent: "flex-start", width: "100%" }}
        >
          <Stack direction="row" spacing={2}>
            <LoadingButton
              type="submit"
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ textTransform: "none" }}
              loading={loading}
              loadingPosition="start"
              loadingIndicator={<CircularProgress color="info" size={16} />}
              startIcon={<SendIcon />}
            >
              <span>Send Message</span>
            </LoadingButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
