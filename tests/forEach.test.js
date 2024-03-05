const forEach = require('../src/forEach');

describe('forEach', () => {
  // TODO: Put your tests here
  let fakeCallback;
  let testArray;
  // Test that your callback is invoked for each array entry
  test('The callback is not being invoked for each array entry',() => {
     fakeCallback = jest.fn();
     testArray = [0,1,2,3,4]

    forEach(testArray, fakeCallback);

    expect(fakeCallback).toHaveBeenCalledTimes(testArray.length);
  });


  // Test that your callback arguments are provided accurately
  test('The callback is not being call accuratelly',() => {
    fakeCallback = jest.fn();
    testArray = [0,1,2,3]

   forEach(testArray, fakeCallback);

    expect(fakeCallback).toHaveBeenCalledWith(0, 0, testArray);
    expect(fakeCallback).toHaveBeenCalledWith(1, 1, testArray);
    expect(fakeCallback).toHaveBeenCalledWith(2, 2, testArray);
    expect(fakeCallback).toHaveBeenCalledWith(3, 3, testArray);
 });


});