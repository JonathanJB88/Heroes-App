import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe("Pruebas en <AppRouter />", () => {
  test("Debe mostrar el login si no está autenticado", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByText("LogIn").length).toBe(2);
  });

  test("Debe mostrar el componente de Marvel si está autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "ABC",
        name: "Juan",
      },
    };
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText(contextValue.user.name)).toBeTruthy();
  });
});
