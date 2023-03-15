import { Container, Typography, Box, Link } from "@mui/material";

import ProTip from "./ProTip";
import Appbar from "./components/appbar/Appbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        ForestAPE
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

function App() {
  return (
    <div className="App">
      <div>
        <Appbar />
        <Container maxWidth="sm">
          <Box sx={{ my: 5 }}>
            <h1 className="text-3xl font-bold underline text-center">
              Material UI Vite.js in TypeScript with TailwindCSS
            </h1>
            <br></br>
            <ProTip />
            <Copyright />
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default App;
