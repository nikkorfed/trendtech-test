let array = [1, 2, 3, 4, 5, 6, 7, 8];
let array2 = [1, 3, 4, 5, 6, 7, 8];
let array3 = [1, 3, 4, 5, 6, 7, 8, 10, 11, 12];

let transform = (array) =>
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

// Способ 2
// Проходить по всем элементам тем же reduce и формировать массив массивов с последовательными числами. После пройтись по этим массивам и взять только крайние числа. После, объединить запятыми.

let result = transform(array3);
console.log(result);
