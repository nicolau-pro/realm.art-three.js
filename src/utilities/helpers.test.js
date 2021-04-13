const { myHelper, compare } = require('./helpers');

const myHelperTests = [
  { a: 1, b: 2, expectedResult: 3 },
  { a: -1, b: 2.3, expectedResult: 1.3 },
  { a: 1, b: '2', expectedResult: 3 },
  { a: 1, b: 'Q', expectedResult: null },
  { a: 1, b: null, expectedResult: null },
  { a: null, b: null, expectedResult: null },
  { a: undefined, b: undefined, expectedResult: null },
  { a: true, b: true, expectedResult: null },
  { a: null, expectedResult: null },
  { expectedResult: null },
];

const compareTests = [{ array: [79, 48, 12, 4], expectedResult: [4, 12, 48, 79] }];

myHelperTests.forEach((testCase) =>
  test(`the sum of ${testCase.a} and ${testCase.b} returns ${testCase.expectedResult}`, () => {
    const tolerance = 1e-15; // For sum errors
    testCase.expectedResult
      ? expect(myHelper(testCase.a, testCase.b)).toBeGreaterThan(testCase.expectedResult - tolerance) &&
        expect(myHelper(testCase.a, testCase.b)).toBeLessThan(testCase.expectedResult + tolerance)
      : expect(myHelper(testCase.a, testCase.b)).toBe(testCase.expectedResult);
  })
);

compareTests.forEach((testCase) =>
  test(`sorting the array ${testCase.array} returns ${testCase.expectedResult}`, () => {
    expect(testCase.array.sort(compare)).toStrictEqual(testCase.expectedResult);
  })
);
