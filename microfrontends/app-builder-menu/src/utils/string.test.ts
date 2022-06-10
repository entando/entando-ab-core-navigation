import { toSnakeCase } from './string';

describe('Verify toSnakeCase function correctness', () => {
  it('should return correct result', () => {
    const string = 'ThisIsAString';
    const expectedResult = 'this_is_a_string';
    expect(toSnakeCase(string)).toEqual(expectedResult);
  });
});
