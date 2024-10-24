import { Link, styled } from "@mui/material";
import { MuiLinkProps } from ".";

const StyledLink = styled(Link, {
  shouldForwardProp: (name: string) =>
    !["isInverted", "transition"].includes(name),
})<MuiLinkProps>(({ theme, isInverted, transition }) => ({
  backgroundColor: isInverted
    ? theme.palette.default.main
    : theme.palette.inverted.main,
  borderBottomColor: isInverted
    ? theme.palette.default.main
    : theme.palette.inverted.main,
  borderTopColor: isInverted
    ? theme.palette.default.main
    : theme.palette.inverted.main,
  color: isInverted ? theme.palette.inverted.main : theme.palette.default.main,
  fontFamily: "Montserrat",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: 6,
  lineHeight: "auto",
  textTransform: "uppercase",
  display: "inline-block",
  marginLeft: 10,
  marginRight: 10,
  paddingTop: 2,
  paddingBottom: 2,
  paddingLeft: 5,
  paddingRight: 5,
  position: "relative",
  cursor: "pointer",
  transition:
    transition ||
    theme.transitions.create("all", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeInOut,
    }),
  ":focus-visible": {
    outlineColor: isInverted
      ? theme.palette.inverted.main
      : theme.palette.default.main,
    outlineOffset: 2,
    outlineStyle: "solid",
    outlineWidth: 2,
  },
  "::first-letter": {
    marginLeft: "0.30rem",
  },
  ":hover,:focus": {
    backgroundColor: isInverted
      ? theme.palette.inverted.main
      : theme.palette.default.main,
    borderColor: isInverted
      ? theme.palette.inverted.main
      : theme.palette.default.main,
    color: isInverted
      ? theme.palette.default.main
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
    bottom: 0,
    left: -8,
    position: "absolute",
    top: 0,
    width: 2,
    transition:
      transition ||
      theme.transitions.create("all", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeInOut,
      }),
    backgroundColor: isInverted
      ? theme.palette.inverted.main
      : theme.palette.default.main,
  },
  "::after": {
    content: "' '",
    bottom: 0,
    right: -8,
    position: "absolute",
    top: 0,
    width: 2,
    transition:
      transition ||
      theme.transitions.create("all", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeInOut,
      }),
    backgroundColor: isInverted
      ? theme.palette.inverted.main
      : theme.palette.default.main,
  },
}));

export default StyledLink;
