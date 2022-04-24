import React from "react";
import LinkedIn from "../../assets/img/Linkedin-logo.png";
import stackoverflow from "../../assets/img/stackoverflow.png";
import github from "../../assets/img/github.png";
import { Container, Box, Typography } from "@mui/material";

//Footer with anchor tags and imported icons downloaded from www.iconfinder.com
function Footer() {
  return (
    <Container>
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <a href={`https://www.linkedin.com/in/jeremy-gieske-480003a/`}>
          <img src={LinkedIn} />
        </a>
        <a href={`https://stackoverflow.com/users/17066370/8bitgamer`}>
          <img src={stackoverflow} />
        </a>
        <a href={`https://github.com/8bitgaming`}>
          <img src={github} />
        </a>
      </Box>
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption">© Jeremy Gieske 2022</Typography>
      </Box>
    </Container>
  );
}

export default Footer;
