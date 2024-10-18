import { LinkProps } from "@mui/material";
import StyledLink from "./style";

const MuiLink = (props: LinkProps) => {
  return (
    <StyledLink href={props.href} underline="none">
      {props.children}
    </StyledLink>
  );
};

export default MuiLink;
