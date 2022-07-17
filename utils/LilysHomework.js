const getSwapCount = (array, reverse = false) => {
  let swapCount = 0;
  const sortedArray = array.slice().sort((a, b) => a - b);

  if (!reverse) sortedArray.reverse();
  // get indexes by value
  const indexes = {};
  array.forEach((value, index) => {
    indexes[value] = index;
  });

  for (let rightIndex = 0; rightIndex < array.length; rightIndex++) {
    const currentValue = array[rightIndex];
    // find what value comes in this position
    const rightValue = sortedArray[rightIndex];
    // find pos of the right value in the disordered array
    const nextIndex = indexes[rightValue];

    // if they aren't in the same pos, swap
    if (nextIndex !== rightIndex) {
      array[nextIndex] = currentValue;
      array[rightIndex] = rightValue;
      // update indexation
      indexes[currentValue] = nextIndex;
      swapCount++;
    }
  }

  return swapCount;
};

const lilysHomework = (array) => {
  const arraySlice = array.slice();
  const down = getSwapCount(array, true);
  const up = getSwapCount(arraySlice);

  return Math.min(down, up);
};

const array = [3, 4, 2, 5, 1];
const result = lilysHomework(array);
console.log(result);
