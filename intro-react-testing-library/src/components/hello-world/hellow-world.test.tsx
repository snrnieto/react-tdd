import { render, screen } from "@testing-library/react";
import HelloWorld from "./hello-world";

test("renders hello world", () => {
  render(<HelloWorld />);
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
  const title = screen.getByText(/HelloWorld/i);
  expect(title).toBeInTheDocument();
});
