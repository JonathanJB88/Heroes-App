import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en <Navbar />", () => {
  test("Debe mostrar el nombre del usuario logeado", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "ABC",
        name: "Juan",
      },
    };

    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText(contextValue.user.name)).toBeTruthy();
  });

  test("Debe llamar a la función logout y al navigate cuando se hace click en el botón", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "ABC",
        name: "Juan",
      },
      logout: jest.fn(),
    };

    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
