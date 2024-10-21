import { Box, Typography } from "@mui/material";
import { MuiButton, MuiLink, Quote } from "./components";

function App() {
  return (
    <>
      <Typography variant="h1">Hello World!</Typography>
      <MuiButton color="default" size="small">
        Click me!
      </MuiButton>
      <MuiButton color="primary" size="medium">
        Click me!
      </MuiButton>
      <MuiButton color="success" size="large">
        Click me!
      </MuiButton>
      <MuiButton color="error" size="large">
        Click me!
      </MuiButton>
      <Box>
        <MuiLink href="/">Link</MuiLink>
        <MuiLink href="/">Link</MuiLink>
        <MuiLink href="/">Link</MuiLink>
        <MuiLink href="/">Link</MuiLink>
      </Box>
      <Quote title="Lorem Ipsum" author="JW Consulting">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, labore
        perspiciatis voluptatum temporibus fuga placeat minus suscipit. Omnis
        dignissimos nostrum, odit sunt quae iste est nam sapiente dicta minima
        praesentium?
      </Quote>
      <Quote title="Lorem Ipsum" author="JW Consulting" alignment="right">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, labore
        perspiciatis voluptatum temporibus fuga placeat minus suscipit. Omnis
        dignissimos nostrum, odit sunt quae iste est nam sapiente dicta minima
        praesentium?
      </Quote>
    </>
  );
}

export default App;
