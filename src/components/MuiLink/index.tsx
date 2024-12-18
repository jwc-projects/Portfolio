import { FunctionComponent, PropsWithChildren } from "react";
import { LinkProps } from "@mui/material";
import StyledLink from "./style";

export interface MuiLinkProps extends LinkProps {
  isInverted?: boolean;
  transition?: string;
}
const MuiLink: FunctionComponent<PropsWithChildren<MuiLinkProps>> = ({
  isInverted = false,
  transition,
  ...props
}) => {
  return (
    <StyledLink
      {...props}
      underline="none"
      isInverted={isInverted}
      transition={transition}
    >
      {props.children}
    </StyledLink>
  );
};

export default MuiLink;
