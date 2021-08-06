let array = [1, 2, 3, 4, 5, 6, 7, 8];
let array2 = [1, 3, 4, 5, 6, 7, 8];
let array3 = [1, 3, 4, 5, 6, 7, 8, 10, 11, 12];

let transform2 = (array) =>
  array.reduce((string, item, index) => {
    let previous = array[index - 1];
    let next = array[index + 1];

    if (!previous) return string + item;

    if (next) {
      if (previous + 1 == item && item + 1 == next) return string + "";
      else if (previous + 1 == item && item + 1 != next) return string + "-" + item;
      else return string + "," + item;
    }

    if (!next) {
      if (previous + 1 == item) return string + "-" + item;
      else return string + "," + item;
    }
  }, "");

let transform = (array) => {
  let result = array.reduce((array, item) => {
    if (!array.length) return array.push([item]) && array;

    let lastSequence = array[array.length - 1];
    let lastItem = lastSequence[lastSequence.length - 1];

    lastItem + 1 == item ? lastSequence.push(item) : array.push([item]);
    return array;
  }, []);

  let sequenceToString = (array) => (array.length > 2 ? `${array[0]}-${array[array.length - 1]}` : array.join(","));
  return result.map(sequenceToString).join(",");
};

// let result = transform(array3);
// console.log(result);

module.exports = transform;
