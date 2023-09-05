import mostrar from "./lector.js";

describe("Leer", () => {
  it("mostrar la frase recibida", () => {
    expect(mostrar("aaa")).toEqual("aaa");
  });
});
