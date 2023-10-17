import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/utils-for-tests";
import Home from "./Home";

describe("Testing Home page", () => {
  test("test welocome page", () => {
    renderWithProviders(<Home />);
    expect(
      screen.getByText("Welcome to Expense Tracker!", { exact: false })
    ).toBeInTheDocument();
  });
});
