import { FunctionComponent, PropsWithChildren } from "react";
import { LinkProps } from "@mui/material";
import StyledLink from "./style";

export interface MuiLinkProps extends LinkProps {
  isInverted?: boolean;
}
const MuiLink: FunctionComponent<PropsWithChildren<MuiLinkProps>> = ({
  isInverted = false,
  ...props
}) => {
  return (
    <StyledLink {...props} underline="none" isInverted={isInverted}>
      {props.children}
    </StyledLink>
  );
};

export default MuiLink;
