import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ color, theme }) => ({
  borderRadius: "initial",
  "&:hover,&:focus": {
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
  },
  "&::before": {
    backgroundColor: color
      ? // @ts-ignore
        theme.palette[color].main
      : theme.palette.default.main,
  },
  "&::after": {
    backgroundColor: color
      ? // @ts-ignore
        theme.palette[color].main
      : theme.palette.default.main,
  },
}));

export default StyledButton;
