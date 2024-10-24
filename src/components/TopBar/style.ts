import { AppBar, styled } from "@mui/material";

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (name) => name !== "isElevated",
})<{ isElevated: boolean }>(({ theme, isElevated }) => ({
  backgroundColor: isElevated
    ? theme.palette.default.main
    : theme.palette.inverted.main,
  minHeight: isElevated ? 56 : 72,
  transition: theme.transitions.create("all", {
    duration: theme.transitions.duration.complex,
    easing: theme.transitions.easing.easeInOut,
  }),
  ".MuiToolbar-root": {
    minHeight: isElevated ? 56 : 72,
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  ".color-default": {
    color: isElevated
      ? theme.palette.inverted.main
      : theme.palette.default.main,
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
}));

export default StyledAppBar;
