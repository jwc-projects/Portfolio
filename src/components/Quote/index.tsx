import { Box, Typography } from "@mui/material";
import { FunctionComponent, PropsWithChildren } from "react";

type Alignment = "left" | "right";
interface QuoteProps {
  title?: string;
  content?: string;
  author?: string;
  alignment?: Alignment;
}
const Quote: FunctionComponent<PropsWithChildren<QuoteProps>> = ({
  alignment = "left",
  author,
  children,
  title,
}) => {
  return (
    <Box
      paddingX={2}
      paddingY={1}
      sx={{
        textAlign: alignment,
        borderColor: "default.light",
        borderStyle: "solid",
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: alignment === "left" ? 5 : 0,
        borderRightWidth: alignment === "right" ? 5 : 0,
        marginLeft: alignment === "left" ? 1 : 0,
        marginRight: alignment === "right" ? 1 : 0,
      }}
    >
      {title && (
        <Typography variant="h6" component="h3" mb={1}>
          {title}
        </Typography>
      )}
      {children && (
        <Typography variant="caption" component="p" mb={1}>
          {children}
        </Typography>
      )}
      {author && (
        <Typography variant="caption" component="p">
          - {author}
        </Typography>
      )}
    </Box>
  );
};

export default Quote;
