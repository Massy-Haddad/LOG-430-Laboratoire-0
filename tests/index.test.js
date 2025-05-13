const { direBonjour } = require('./utils');

test('sayHello retourne une salutation', () => {
  expect(direBonjour("World")).toBe("Hello, World !");
});

test('sayHello fonctionne avec un nom vide', () => {
  expect(direBonjour("")).toBe("Bonjour,  !");
});
