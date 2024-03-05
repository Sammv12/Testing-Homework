const clamp = require('../src/clamp');

describe('clamp', () => {

  // TODO: Put your tests here

  // Test that defaults are applied
  test('The default parameter are not provided', () => {
    expect(clamp(-4)).toBe(0);
    expect(clamp(10)).toBe(1);
  });

  // Test that lower clamps are applied
  test('The upper clamp should return the min value', () => {
    expect(clamp(2, 5, 10)).toBe(5);

  });


  // Test that upper clamps are applied
  test('The upper clamp should return the max value',() =>{
    expect(clamp(30, 5, 10)).toBe(10);

  })


});