import { LinkProps } from "@mui/material";
import StyledLink from "./style";

const MuiLink = (props: LinkProps) => {
  return (
    <StyledLink {...props} underline="none">
      {props.children}
    </StyledLink>
  );
};

export default MuiLink;
