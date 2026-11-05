import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("Weather App", () => {
  it("renders title", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /weather app/i })
    ).toBeInTheDocument();
  });

  it("renders search button", () => {
    render(<App />);

    expect(
      screen.getByRole("button", { name: /search/i })
    ).toBeInTheDocument();
  });

  it("renders city input", () => {
    render(<App />);

    expect(
      screen.getByPlaceholderText(/enter city/i)
    ).toBeInTheDocument();
  });
});