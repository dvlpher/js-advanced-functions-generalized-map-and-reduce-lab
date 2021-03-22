// Add your functions here
function map(sourceArray, callback) {
  const newSourceArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newSourceArray.push(callback(sourceArray[i]));
  }
  return newSourceArray;
}

function reduce(sourceArray, callback, starting) {
  let newSourceArray = !!starting ? starting : sourceArray[0];
  let i = !!starting ? 0 : 1;

  for (; i < sourceArray.length; i++) {
    newSourceArray = callback(sourceArray[i], newSourceArray);
  }

  return newSourceArray;
}
