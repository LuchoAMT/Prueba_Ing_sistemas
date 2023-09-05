import ops from "./lector.js";

describe("Leer", () => {
  it("mostrar la frase recibida", () => {
    expect(ops.mostrar("aaa")).toEqual("aaa");
  });

  it("mostrar la cantidad de palabras no repetidas", () => {
    expect(ops.leer("aaa bbb")).toEqual(1);
  });
});
