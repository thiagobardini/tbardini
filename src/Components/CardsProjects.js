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
  img,
  techs,
  live,
  readme,
  github,
  openNewTab,
  logo,
  index,
  height,
  width,
}) => {
  return (
    <Box key={id}>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          cursor: "pointer",
          objectFit: "cover",
          backgroundPosition: " center center",
          backgroundRepeat: "no-repeat",

          display: "flex",
          alignItems: "flex-end",
          borderRadius: "9px",
          breakInside: "avoid",
        }}
      >
        <CardMedia
          component="img"
          alt={title}
          image={img}
          sx={{
            with: "100%",
            maxWidth: "770px",
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            opacity: { xs: 1, md: 1 },
            background:
              "linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.9))",
            "&:hover": {
              opacity: 1,
              background:
                "linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.9))",
            },
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="#eeeeee"
            sx={{ fontWeight: 900 }}
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
              {description} {index + 1}
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
