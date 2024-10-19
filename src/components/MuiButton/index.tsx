import { ButtonProps } from "@mui/material";
import StyledButton from "./style";

const MuiButton = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default MuiButton;
