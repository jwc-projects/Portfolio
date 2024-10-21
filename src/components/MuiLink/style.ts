import { Link, styled } from "@mui/material";

const StyledLink = styled(Link)(({ theme }) => ({
  backgroundColor: theme.palette.inverted.main,
  borderBottomColor: theme.palette.inverted.main,
  borderTopColor: theme.palette.inverted.main,
  color: theme.palette.default.main,
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
    outlineColor: "#005FCC",
    outlineOffset: 2,
    outlineStyle: "solid",
    outlineWidth: 2,
  },
  "::first-letter": {
    marginLeft: "0.30rem",
  },
  ":hover,:focus": {
    backgroundColor: theme.palette.default.main,
    borderColor: theme.palette.default.main,
    color: theme.palette.inverted.main,
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
    backgroundColor: theme.palette.default.main,
  },
  "::after": {
    content: "' '",
    bottom: 0,
    right: -8,
    position: "absolute",
    top: 0,
    width: 2,
    transition: "all 0.2s ease 0s",
    backgroundColor: theme.palette.default.main,
  },
}));

export default StyledLink;
