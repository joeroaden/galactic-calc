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
  test('it should convert age to venus years', () => {
    const newAge = new Age (32);
    expect (newAge.venusAge()).toEqual(52);
  });
  test('it should convert age to mars years', () => {
    const newAge = new Age (32);
    expect (newAge.marsAge()).toEqual(17);
  });
  test('it should convert age to jupiter years', () => {
    const newAge = new Age (32);
    expect (newAge.jupiterAge()).toEqual(3);
  }); 
  test('it should calculate the life expectancy on earth', () => {
    const newAge = new Age (32);
    expect (newAge.lifeOnEarth()).toEqual(73);
  });
  test("it should calculate the years remaining on Earth", () => {
    const newAge = new Age (32);
    expect (newAge.lifeLeftOnEarth()).toEqual(41);
  });
  test("it should calculate the years remaining on Mercury", () => {
    const newAge = new Age (32);
    expect (newAge.lifeLeftOnMercury()).toEqual(171);
  });
});
