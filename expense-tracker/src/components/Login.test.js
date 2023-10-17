import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/utils-for-tests";
import userEvent from "@testing-library/user-event";

import Login from "./Login";

describe("Login page tests", () => {
  test("testing login form with input lables", () => {
    renderWithProviders(<Login />);

    expect(
      screen.getByText("Password :", "Email :", "Log In")
    ).toBeInTheDocument();
  });

  test("Checkin for the forgotPassword in the login page", () => {
    renderWithProviders(<Login />);
    expect(screen.getByText("Forgot password?")).toBeInTheDocument();
  });

  test("Checking for the create a new account", () => {
    renderWithProviders(<Login />);
    expect(
      screen.getByText("Create a new account? Signup", { exact: false })
    ).toBeInTheDocument();
  });
  test("Login page form heading test", () => {
    renderWithProviders(<Login />);
    expect(screen.getByText("Login", { exact: false })).toBeInTheDocument();
  });
  // test("render 'Signup' when button is clicked", () => {
  //   // Arrange
  //   renderWithProviders(<Login />);

  //   // Actinons
  //   const element = screen.getBy("a",{name:"change"})
  //   userEvent.click(element);

  //   //Assert
  //   expect(
  //     screen.getByText("Confirm Password :", { exact: false })
  //   ).toBeInTheDocument();
  // });
  // test("render 'Confirm password' when the button is clicked", () => {
  //   // Arrange
  //   renderWithProviders(<Login />);

  //   // actions
  //   const element = screen.getByText("Create a new account? Signup");
  //   userEvent.click(element);

  //   // assert
  //   expect(
  //     screen.getByText("Confirm Password :", { exact: false })
  //   ).toBeInTheDocument();
  // });
});
