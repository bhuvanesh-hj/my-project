import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/utils-for-tests";

import Header from "./Header";

describe("Header part testing", () => {
  test("title of the header", () => {
    renderWithProviders(<Header />);
    const titleOfHeader = screen.getByText("My Expense Tracker", {
      exact: false,
    });
    expect(titleOfHeader).toBeInTheDocument();
  });

  test("nav links of the header", () => {
    renderWithProviders(<Header />);
    expect(screen.getByText("Home", "Profile", "About")).toBeInTheDocument();
  });

  test("login in the header", () => {
    renderWithProviders(<Header />);
    expect(screen.getByText("Log In")).toBeInTheDocument();
  });
});
