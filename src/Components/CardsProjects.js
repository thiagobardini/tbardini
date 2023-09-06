import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Box,
  Chip,
} from "@mui/material";

const CardsProjects = ({
  id,
  title,
  description,
  subtitle,
  img,
  techs,
  height,
}) => {
  return (
    <Box key={id}>
      <Card
        sx={{
          height: "100%",
          position: "relative",
          cursor: "pointer",
          objectFit: "cover",
          backgroundPosition: " center center",
          backgroundRepeat: "no-repeat",

          display: "flex",
          alignItems: "flex-end",
          borderRadius: "11px",
          breakInside: "avoid",
        }}
      >
        <CardMedia
          component="img"
          alt={title}
          image={img}
          sx={{
            width: "100%",
            // maxWidth: "770px",
            minWidth: "273px",
            objectFit: "cover",
            height: { xs: "100%", md: height },
            minHeight: { xs: "350px", height: "none" },
            maxHeight: { xs: "500px", height: "none" },
          }}
        />

        <CardContent
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            opacity: { xs: 1, md: 0 },
            background:
              "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))",
            transition: "opacity 0.3s ease-in-out, background 0.3s ease-in-out",
            "&:hover": {
              opacity: 1,
              background:
                "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))",
            },
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color="#eeeeee"
            sx={{
              fontFamily: "GothamSSm-Bold",
              textTransform: "capitalize",
            }}
          >
            <div
              style={{ display: "inline-block", backdropFilter: "blur(10px)" }}
            >
              {title}
            </div>
          </Typography>
          <Typography variant="body2" color="#eeeeee" mb={2} component="div">
            <div
              style={{ display: "inline-block", backdropFilter: "blur(10px)" }}
            >
              {subtitle}
            </div>
          </Typography>

          <Stack
            mb={2}
            direction="row"
            sx={{
              flexWrap: "wrap",
              gap: "4px",
              rowGap: "8px",
            }}
          >
            {techs.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                color="secondary"
                sx={{
                  textTransform: "capitalize",
                  fontFamily: "GothamSSm-Light",
                }}
              />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardsProjects;
