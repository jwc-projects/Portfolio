import { AppBar, styled } from "@mui/material";

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (name) => name !== "isElevated",
})<{ isElevated: boolean }>(({ theme, isElevated }) => ({
  backgroundColor: isElevated ? theme.palette.default.main : "rgb(0, 0, 0, 0)",
  minHeight: isElevated ? 56 : 72,
  transition: "all 0.8s",
  ".MuiToolbar-root": {
    minHeight: isElevated ? 56 : 72,
    transition: "all 0.8s",
  },
  ".color-default": {
    color: isElevated
      ? theme.palette.inverted.main
      : theme.palette.default.main,
    transition: "all 0.8s",
  },
}));

export default StyledAppBar;
