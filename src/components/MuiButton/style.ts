import { Button, styled } from "@mui/material";

const StyledButton = styled(Button, {
  shouldForwardProp: (name) => name !== "isInverted",
})(({ color, theme }) => ({
  borderRadius: "initial",
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
  "&.MuiButton-sizeSmall": {
    fontSize: 10,
    letterSpacing: 6,
  },
  "&.MuiButton-sizeMedium": {
    fontSize: 12,
    letterSpacing: 6,
  },
  "&.MuiButton-sizeLarge": {
    fontSize: 14,
    letterSpacing: 6,
  },
  "::first-letter": {
    marginLeft: "0.30rem",
  },
  ":hover,:focus": {
    backgroundColor: color
      ? // @ts-ignore
        theme.palette[color].main
      : theme.palette.default.main,
    borderColor: color
      ? // @ts-ignore
        theme.palette[color].main
      : theme.palette.inverted.main,
    color: color
      ? // @ts-ignore
        theme.palette.text.secondary
      : theme.palette.inverted.main,
    "&::before": {
      left: 0,
    },
    "&::after": {
      right: 0,
    },
  },
  "::before": {
    content: "' '",
    width: 2,
    top: 0,
    bottom: 0,
    left: -8,
    position: "absolute",
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeInOut,
    }),
    backgroundColor: color
      ? // @ts-ignore
        theme.palette[color].main
      : theme.palette.default.main,
  },
  "::after": {
    content: "' '",
    bottom: 0,
    right: -8,
    position: "absolute",
    top: 0,
    width: 2,
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeInOut,
    }),
    backgroundColor: color
      ? // @ts-ignore
        theme.palette[color].main
      : theme.palette.default.main,
  },
}));

export default StyledButton;
