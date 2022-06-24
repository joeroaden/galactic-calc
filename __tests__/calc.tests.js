import { Age } from './../src/calc.js';

describe ('Age', () => {

  test('It should create an Age object', () => {
    const newAge = new Age (32);
    expect (newAge.baseAge).toEqual(32);
  });
});