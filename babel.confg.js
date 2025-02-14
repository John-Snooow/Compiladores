// Esse preset permite que você escreva código JavaScript moderno (como ES6+) e o transpile automaticamente para uma versão compatível com navegadores mais antigos, com base nas configurações fornecidas.
const presets = [
  [
    "babel/preset-env",
    {
      // posso colocar objetos para vesões de navegadores
      targets: {
        edge: "17", // versão do navegador
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
    },
  ],
];

module.exports = { presets }; // para poder exportar
