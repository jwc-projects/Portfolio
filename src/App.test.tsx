import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithTheme } from "../src/setup";

describe("App", () => {
    it("renders the App component", () => {
        renderWithTheme(<App />);
        screen.logTestingPlaygroundURL();
    });
});
