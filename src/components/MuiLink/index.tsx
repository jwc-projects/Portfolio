import { FunctionComponent, PropsWithChildren } from "react";
import { LinkProps } from "@mui/material";
import StyledLink from "./style";

export interface MuiLinkProps extends LinkProps {
  isInverted?: boolean;
  transitionTime?: number;
}
const MuiLink: FunctionComponent<PropsWithChildren<MuiLinkProps>> = ({
  isInverted = false,
  transitionTime = 0.2,
  ...props
}) => {
  return (
    <StyledLink
      {...props}
      underline="none"
      isInverted={isInverted}
      transitionTime={transitionTime}
    >
      {props.children}
    </StyledLink>
  );
};

export default MuiLink;
