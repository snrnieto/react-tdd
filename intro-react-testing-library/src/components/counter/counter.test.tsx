import { render, screen, fireEvent } from "@testing-library/react";

import Counter from "./counter";

test("display zero initial counts", () => {
  render(<Counter />);
  const result = screen.getByText(/Clicked times: 0/i);
  expect(result).toBeInTheDocument();
});

test("display new counter after one click", () => {
  render(<Counter />);
  const button = screen.getByText(/Click/i, { selector: "button" });
  fireEvent.click(button);
  const result = screen.getByText(/Clicked times: 1/i);
  expect(result).toBeInTheDocument();
});
