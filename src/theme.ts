import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    default?: PaletteOptions["primary"];
    inverted?: PaletteOptions["primary"];
  }
  interface Palette {
    default: Palette["primary"];
    inverted: Palette["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    default: true;
  }
}

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
    mode: "light",
    common: {
      black: "#262626",
      white: "#FFFFFF",
    },
    text: {
      primary: "#262626",
      secondary: "#FFFFFF",
    },
    default: {
      main: "#262626",
    },
    inverted: {
      main: "#FFFFFF",
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
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
          fontWeight: 700,
          lineHeight: "auto",
          textTransform: "uppercase",
          display: "inline-block",
          marginLeft: 10,
          marginRight: 10,
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 5,
          paddingRight: 5,
          "::first-letter": {
            marginLeft: "0.30rem",
          },
          "&::before": {
            content: "' '",
            width: 2,
            top: 0,
            bottom: 0,
            left: -8,
            position: "absolute",
            transition: "all 0.2s ease 0s",
          },
          "&::after": {
            content: "' '",
            bottom: 0,
            right: -8,
            position: "absolute",
            top: 0,
            width: 2,
            transition: "all 0.2s ease 0s",
          },
          "&:hover::before,&:focus::before": {
            left: 0,
          },
          "&:hover::after,&:focus::after": {
            right: 0,
          },
        },
        sizeSmall: {
          fontSize: 10,
          letterSpacing: 6,
        },
        sizeMedium: {
          fontSize: 12,
          letterSpacing: 6,
        },
        sizeLarge: {
          fontSize: 14,
          letterSpacing: 6,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 6,
          lineHeight: "auto",
          textTransform: "uppercase",
          display: "inline-block",
          cursor: "pointer",
          marginLeft: 10,
          marginRight: 10,
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 5,
          paddingRight: 5,
          position: "relative",
          transition: "all 0.2s ease 0.2s",
          ":focus-visible": {
            outlineColor: "#005FCC",
            outlineOffset: 2,
            outlineStyle: "solid",
            outlineWidth: 2,
          },
          "::first-letter": {
            marginLeft: "0.30rem",
          },
          "&::before": {
            content: "' '",
            bottom: 0,
            left: -8,
            position: "absolute",
            top: 0,
            width: 2,
            transition: "all 0.2s ease 0s",
          },
          "&::after": {
            content: "' '",
            bottom: 0,
            right: -8,
            position: "absolute",
            top: 0,
            width: 2,
            transition: "all 0.2s ease 0s",
          },
          "&:hover::before,&:focus::before": {
            left: 0,
          },
          "&:hover::after,&:focus::after": {
            right: 0,
          },
        },
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
