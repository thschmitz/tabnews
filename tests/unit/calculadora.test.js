/* eslint-disable jest/valid-title */
/* eslint-disable jest/expect-expect */
const calculadora = require("../../models/calculadora.js");

test("nome do teste", callbackFunction);

function callbackFunction() {
   console.log("Esta funcao esta sendo chamada!");
}

test("nome do teste2", function () {
   console.log("Assim funciona tmb");
});

test("nome do teste3: ", () => {
   console.log("Testando se assim tmb funciona");
});

test("espero que 1 seja 1", () => {
   expect(1).toBe(1);
});

test("testando calculadora: 1 + 2 = 3", () => {
   expect(calculadora.somar(1, 2)).toBe(3);
});

test("testando calculadora: 'banana' + 100 = 'Erro'", () => {
   expect(calculadora.somar("banana", 2)).toBe("Erro");
});
