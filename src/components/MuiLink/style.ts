import { Link, styled } from "@mui/material";

const StyledLink = styled(Link)(({ theme }) => ({
  backgroundColor: theme.palette.inverted.main,
  borderBottomColor: theme.palette.inverted.main,
  borderTopColor: theme.palette.inverted.main,
  color: theme.palette.default.main,
  "&:hover,&:focus": {
    backgroundColor: theme.palette.default.main,
    borderColor: theme.palette.default.main,
    color: theme.palette.inverted.main,
  },
  "&::before": {
    backgroundColor: theme.palette.default.main,
  },
  "&::after": {
    backgroundColor: theme.palette.default.main,
  },
}));

export default StyledLink;
