import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import logo from "./assets/icon.png";
import Montagem from "./routes/Montagem";
import Root from "./routes/Root";

import data from "./data/itl50.json";

const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  {
    path: "/montagem/:maquina/:bitola",
    element: <Montagem />,
    loader: ({ params }) => {
      if (params.bitola) {
        return data;
      }
      return "oops";
    },
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 6,
          paddingBottom: 4,
          minHeight: "100vh",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            component="h1"
            color="primary"
            variant="h4"
            textAlign="center"
            sx={{ fontWeight: "bolder" }}
          >
            StarForm
          </Typography>

          <Box
            component="img"
            alt="StarForm Logo"
            src={logo}
            sx={{
              padding: 2,
              margin: 2,
              maxWidth: { xs: 196 },
            }}
          />
        </Box>
        <CssBaseline />
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
