const queryNetwork = require('../src/queryNetwork');

const fetch = require('../dependencies/fetch')

// Mock fetch.js
jest.mock('./fetch', () => ({
  fetch: jest.fn(),
}));

describe('queryNetwork', () => {
  // TODO: Put your tests here
  beforeEach(() => {
    fetchMock.default.resetMocks();
    jest.clearAllMocks();
  })

  // Test that fetch is invoked
  test('fetch is invoked',(status) => {
    //const fakeResponse = { data: 'fake data' };
   const response = {
      status: 200
   }
   fetchMock.default.mockResponse(JSON.stringify(response), { status });
    /*fetch.mockResolvedValue({
      status: 200,
      json: jest.fn().mockResolvedValue(fakeResponse),
    });
  */
   
  });





  // Test that the returned promise resolves into the object
  // your mock is using for the json() method
});