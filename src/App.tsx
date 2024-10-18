import { Box, Button, Typography } from "@mui/material";
import MuiLink from "./components/MuiLink";

function App() {
  return (
    <>
      <Typography variant="h1">Hello World!</Typography>
      <Button>Click Me!</Button>
      <Box>
        <MuiLink href="/">Link</MuiLink>
        <MuiLink href="/">Link</MuiLink>
        <MuiLink href="/">Link</MuiLink>
        <MuiLink href="/">Link</MuiLink>
      </Box>
    </>
  );
}

export default App;
