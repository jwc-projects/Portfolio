import { Paper, styled } from "@mui/material";

const StyledCriticalLinksPaper = styled(Paper)(({ theme }) => ({
  position: "fixed",
  right: 0,
  bottom: "10vh",
  borderColor: theme.palette.transparent.main,
  borderTopLeftRadius: theme.shape.borderRadius,
  borderBottomLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  backgroundColor: theme.palette.inverted.main,
  color: theme.palette.default.main,
  display: "flex",
  flexDirection: "column",
}));

export default StyledCriticalLinksPaper;
