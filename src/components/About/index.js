import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";

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
        <Grid item xs={2}>
          <Avatar alt="Jeremy Gieske" src="../../assets/img/profile.jpeg" sx={{ width: 100, height: 100 }} />
        </Grid>
        <Grid item xs={10}>
          <Item>
            Passionate about technology and especially agile development, I
            currently work in Target Technology Services as a Lead Scrum Master
            supporting corporate systems. My current team is using React to
            develop custom apps for our store and distribution team members.
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
