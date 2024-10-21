import { Link, styled } from "@mui/material";
import { MuiLinkProps } from ".";

const StyledLink = styled(Link)<MuiLinkProps>(({ theme, inverted }) => ({
  backgroundColor: inverted
    ? theme.palette.default.main
    : theme.palette.inverted.main,
  borderBottomColor: inverted
    ? theme.palette.default.main
    : theme.palette.inverted.main,
  borderTopColor: inverted
    ? theme.palette.default.main
    : theme.palette.inverted.main,
  color: inverted ? theme.palette.inverted.main : theme.palette.default.main,
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
  transition: "all 0.2s ease 0.2s",
  ":focus-visible": {
    outlineColor: inverted
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
    backgroundColor: inverted
      ? theme.palette.inverted.main
      : theme.palette.default.main,
    borderColor: inverted
      ? theme.palette.inverted.main
      : theme.palette.default.main,
    color: inverted ? theme.palette.default.main : theme.palette.inverted.main,
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
    transition: "all 0.2s ease 0s",
    backgroundColor: inverted
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
    transition: "all 0.2s ease 0s",
    backgroundColor: inverted
      ? theme.palette.inverted.main
      : theme.palette.default.main,
  },
}));

export default StyledLink;
