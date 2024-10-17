import { createTheme } from "@mui/material";

const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const theme = createTheme({
  breakpoints: { values: BREAKPOINTS },
  palette: {
    text: {
      primary: "#262626",
      secondary: "#FFFFFF",
    },
    primary: {
      main: "#2C6396",
    },
    success: {
      main: "#398339",
    },
    info: {
      main: "#1D7E9B",
    },
    warning: {
      main: "#C87D13",
    },
    error: {
      main: "#D43F3A",
    },
  },
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
  components: {
    MuiTypography: {
      defaultProps: {
        color: "textPrimary",
      },
    },
  },
});

theme.typography.h1[theme.breakpoints.up("md")] = {
  fontSize: 50,
  letterSpacing: 20,
};
theme.typography.h2[theme.breakpoints.up("md")] = {
  fontSize: 30,
  letterSpacing: 15,
};
theme.typography.h3[theme.breakpoints.up("md")] = {
  fontSize: 24,
  letterSpacing: 10,
};
theme.typography.h4[theme.breakpoints.up("md")] = {
  fontSize: 20,
  letterSpacing: 8,
};
theme.typography.h5[theme.breakpoints.up("md")] = {
  fontSize: 14,
  letterSpacing: 3,
};
theme.typography.h6[theme.breakpoints.up("md")] = {
  fontSize: 12,
  letterSpacing: 0,
};

export { theme };
