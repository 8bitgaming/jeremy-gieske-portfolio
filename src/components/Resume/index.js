import React from "react";
import Button from "@mui/material/Button";
import { Container, Box, Typography } from "@mui/material";

//Resume section
export default function Resume() {
  return (
    <Box>
      <Typography>
        Experience with React, Javascript, Postgres, MongoDb, MySQL2, HTML, CSS.
      </Typography>

      <Button
        variant="contained"
        href="https://drive.google.com/file/d/1IS3YknlDYvki1Vwu_duwwS1wzTwZGcq3/view?usp=sharing"
      >
        View My Resume
      </Button>
    </Box>
  );
}
