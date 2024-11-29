/* eslint-disable @typescript-eslint/ban-ts-comment */
import { afterEach } from "vitest";
import { cleanup, render as rtlRender } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
    cleanup();
});

// @ts-ignore
const scaffoldTestsWithTheme = (component, ...args) => {
    // @ts-ignore
    return rtlRender(<ThemeProvider theme={theme}>{component}</ThemeProvider>, args);
};

// @ts-ignore
const renderWithTheme = (component, ...args) => scaffoldTestsWithTheme(component, args);

export { renderWithTheme };
