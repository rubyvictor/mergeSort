const {mergeSort} = require('./mergeSort');

describe("mergeSort test", () => {
  it("should sort array", () => {
    const arr = [1, 3, 12, 5, 7, 2, 6, 9];
    expect(mergeSort(arr)).toEqual([1, 2, 3, 5, 6, 7, 9, 12]);
  });

    it("should sort array", () => {
        const arr = [1, -3, 12, 5, 7, -2, 6, 9];
        expect(mergeSort(arr)).toEqual([-3,-2,1, 5, 6, 7, 9, 12]);
    });
});
