import { Link, styled } from "@mui/material";

const StyledLink = styled(Link)(({ theme }) => ({
  backgroundColor: theme.palette.inverted.main,
  borderBottomColor: theme.palette.inverted.main,
  borderBottomStyle: "solid",
  borderBottomWidth: 2,
  borderTopColor: theme.palette.inverted.main,
  borderTopStyle: "solid",
  borderTopWidth: 2,
  color: theme.palette.default.main,
  cursor: "pointer",
  marginLeft: 10,
  marginRight: 10,
  paddingTop: 2,
  paddingBottom: 2,
  paddingLeft: 5,
  paddingRight: 5,
  position: "relative",
  transition: "all 0.2s ease 0.2s",
  "&:hover,&:focus": {
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
  "&::before": {
    content: "' '",
    backgroundColor: theme.palette.default.main,
    bottom: 0,
    left: -8,
    position: "absolute",
    top: 0,
    width: 2,
    transition: "all 0.2s ease 0s",
  },
  "&::after": {
    content: "' '",
    backgroundColor: theme.palette.default.main,
    bottom: 0,
    right: -8,
    position: "absolute",
    top: 0,
    width: 2,
    transition: "all 0.2s ease 0s",
  },
}));

export default StyledLink;
