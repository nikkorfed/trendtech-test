let transform = async (array) => {
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

module.exports = transform;
