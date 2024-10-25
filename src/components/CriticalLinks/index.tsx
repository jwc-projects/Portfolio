import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import StyledCriticalLinksPaper from "./style";
import { Link, PaperProps } from "@mui/material";
import { FunctionComponent, PropsWithChildren } from "react";

const CriticalLinks: FunctionComponent<PropsWithChildren<PaperProps>> = (
  props
) => {
  return (
    <StyledCriticalLinksPaper {...props} elevation={4}>
      <Link
        href="https://www.linkedin.com/in/justinwestra/"
        target="_blank"
        rel="external"
        title="Link to LinkedIn"
        p={1}
        color="default.main"
      >
        <LinkedInIcon />
      </Link>

      <Link
        href="https://github.com/jwc-projects"
        target="_blank"
        rel="external"
        title="Link to Github"
        p={1}
        color="default.main"
      >
        <GitHubIcon />
      </Link>
    </StyledCriticalLinksPaper>
  );
};

export default CriticalLinks;
