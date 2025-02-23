// Usado para o Jest usar algumas palavras especiais do javascript, como o import, usado na bateria de testes
const nextJest = require("next/jest");
require("dotenv").config({ path: ".env.development" });

const createJestConfig = nextJest({
   dir: ".",
});
const jestConfig = createJestConfig({
   moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;
