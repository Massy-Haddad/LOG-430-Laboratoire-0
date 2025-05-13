const { sayHello } = require('../src/utils')

test('sayHello retourne une salutation', () => {
	expect(sayHello('World')).toBe('Hello, World !')
})

test('sayHello fonctionne avec un nom vide', () => {
	expect(sayHello('')).toBe('Hello,  !')
})
