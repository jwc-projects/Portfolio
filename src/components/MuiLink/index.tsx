import { FunctionComponent, PropsWithChildren } from "react";
import { LinkProps } from "@mui/material";
import StyledLink from "./style";

export interface MuiLinkProps extends LinkProps {
  inverted?: boolean;
}
const MuiLink: FunctionComponent<PropsWithChildren<MuiLinkProps>> = ({
  inverted = false,
  ...props
}) => {
  return (
    <StyledLink {...props} underline="none" inverted={inverted}>
      {props.children}
    </StyledLink>
  );
};

export default MuiLink;
