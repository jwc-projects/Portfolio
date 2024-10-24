import { AppBar, styled } from "@mui/material";

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (name) => name !== "isElevated",
})<{ isElevated: boolean }>(({ theme, isElevated }) => ({
  backgroundColor: isElevated
    ? theme.palette.default.main
    : theme.palette.inverted.main,
  minHeight: isElevated ? 56 : 72,
  transition: "all 0.5s ease",
  ".MuiToolbar-root": {
    minHeight: isElevated ? 56 : 72,
    transition: "all 0.5s ease",
  },
  ".color-default": {
    color: isElevated
      ? theme.palette.inverted.main
      : theme.palette.default.main,
    transition: "all 0.5s ease",
  },
}));

export default StyledAppBar;
