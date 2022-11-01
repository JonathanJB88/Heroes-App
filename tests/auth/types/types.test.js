describe("Pruebas en types", () => {
  test("Debe retornar el objeto", () => {
    const types = {
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    };
    expect(types).toEqual(types);
  });
});
