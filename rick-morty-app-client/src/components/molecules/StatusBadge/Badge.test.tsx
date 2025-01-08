import React from "react";
import { render, screen } from "@testing-library/react";
import Badge from "./StatusBadge";

describe("Badge Component", () => {
  it("renders children correctly", () => {
    render(<Badge>Test Badge</Badge>);

    const badgeElement = screen.getByText(/Test Badge/i);
    expect(badgeElement).toBeInTheDocument();
  });

  it("applies default variant class when no variant is provided", () => {
    render(<Badge>Default Variant</Badge>);

    const badgeElement = screen.getByText(/Default Variant/i);
    expect(badgeElement).toHaveClass("badge", "unknown");
  });

  it("applies correct class for variant 'Alive'", () => {
    render(<Badge variant="Alive">Alive Badge</Badge>);

    const badgeElement = screen.getByText(/Alive Badge/i);
    expect(badgeElement).toHaveClass("alive");
  });

  it("applies correct class for variant 'Dead'", () => {
    render(<Badge variant="Dead">Dead Badge</Badge>);

    const badgeElement = screen.getByText(/Dead Badge/i);
    expect(badgeElement).toHaveClass("dead");
  });

  it("applies correct class for variant 'unknown'", () => {
    render(<Badge variant="unknown">Unknown Badge</Badge>);

    const badgeElement = screen.getByText(/Unknown Badge/i);
    expect(badgeElement).toHaveClass("unknown");
  });

  it("handles case insensitivity for variant classes", () => {
    render(<Badge variant="Dead">Case Insensitive Badge</Badge>);

    const badgeElement = screen.getByText(/Case Insensitive Badge/i);
    expect(badgeElement).toHaveClass("dead");
  });
});
