function groupArrayElements(array, wantedGroupCount) {
  if (!Array.isArray(array)) return null;

  const minGroupSize = Math.floor(array.length / wantedGroupCount);
  let leapGroupCount = array.length % wantedGroupCount;
  const returnArray = [];
  let index = 0;

  do {
    leapGroupCount--;
    returnArray.push(
      array.splice(0, leapGroupCount >= 0 ? minGroupSize + 1 : minGroupSize)
    );
  } while (++index < wantedGroupCount);

  return returnArray;
}

module.exports = groupArrayElements;
