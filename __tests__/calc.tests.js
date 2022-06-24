import { Age } from './../src/calc.js';

describe ('Age', () => {

  test('It should create an Age object', () => {
    const newAge = new Age (32);
    expect (newAge.baseAge).toEqual(32);
  });
  test('it should convert age to mercury years', () => {
    const newAge = new Age (32);
    expect (newAge.mercuryAge()).toEqual(133);
  });
});
