import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar, Typography } from "@mui/material";
import Profile from "../../assets/img/profile.jpeg";
import { textAlign } from "@mui/system";

//Using material ui paper to provide white background and Box/Grid to manage the layout
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function About() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={2}>
          <Item sx={{ align: "center" }}>
            <Avatar
              alt="Jeremy Gieske"
              sx={{ width: "95%", height: "95%" }}
              src={Profile}
            />
            <Typography variant="h4">Jeremy Gieske</Typography>
            <Typography>Full Stack Web Developer</Typography>
          </Item>
        </Grid>
        <Grid item xs={8} md={10}>
          <Item>
            <Typography variant="body1">
              Experienced tech leader with over 15 years of leading and
              contributing to diverse, large-scale technology implementations at
              one of the world’s largest retail companies. Passionate about
              growing strong teams that develop amazing apps to solve tough
              business problems. Experience with React, Javascript, Postgres,
              MongoDb, MySQL2, HTML, CSS.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
