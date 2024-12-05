import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "./HomePage";

test("renders HomePage with button", async () => {
  render(<HomePage />);

  // Verify the main heading is rendered
  expect(
    screen.getByRole("heading", { name: /Rick and Morty App/i })
  ).toBeInTheDocument();

  // Verify the description is rendered
  expect(
    screen.getByText(/Explore characters, locations, and episodes/i)
  ).toBeInTheDocument();

  // Verify the button functionality
  const button = screen.getByRole("button", { name: /Learn More/i });
  expect(button).toBeInTheDocument();

  // Simulate a click on the button
  await userEvent.click(button); // Use `await` with `userEvent` for asynchronous events
});
