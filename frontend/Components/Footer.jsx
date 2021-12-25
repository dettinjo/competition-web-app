import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Avatar } from "@mui/material";
import gitImage from "../public/images/github.png";

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {"Copyright © "}Joel Dettinger {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "30vh",
      }}
    >
      <CssBaseline />
      <Box
        bgcolor="#0B142B"
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
        }}
      >
        <Container>
          <Typography variant="h7" color="white">
            This Website was created by Joel Dettinger as Part of the Internet
            Technologie Assignment 2
          </Typography>
          <Link href="https://github.com/dettinjo/competition-web-app">
            <Typography variant="h5" color="white" sx={{ my: 2 }}>
              GitHub Repositroy
            </Typography>
          </Link>
          <Link href="https://competition-web-app.herokuapp.com/playground">
            <Typography variant="h5" color="white" sx={{ my: 2 }}>
              GraphQL Playground
            </Typography>
          </Link>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
