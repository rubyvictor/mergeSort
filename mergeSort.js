function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  let outcome = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      outcome.push(left[leftIndex]);
      leftIndex++;
    } else {
      outcome.push(right[rightIndex]);
      rightIndex++;
    }
  }

  if (leftIndex < left.length) {
      outcome = outcome.concat(left.slice(leftIndex))
  }

    if (rightIndex < right.length) {
        outcome = outcome.concat(right.slice(rightIndex))
    }

  return outcome;
}

module.exports = {
    mergeSort, merge
};
