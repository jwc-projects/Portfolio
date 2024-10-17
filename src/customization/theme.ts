import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    htmlFontSize: 14,
    fontFamily: "Open Sans",
    h1: {
      fontFamily: "Montserrat",
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: 6,
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: 4,
      textTransform: "uppercase",
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: 3,
      textTransform: "uppercase",
    },
    h4: {
      fontFamily: "Montserrat",
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: 2,
      textTransform: "uppercase",
    },
    h5: {
      fontFamily: "Montserrat",
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: 2,
      textTransform: "uppercase",
    },
    h6: {
      fontFamily: "Montserrat",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 0,
      textTransform: "uppercase",
    },
  },
});
