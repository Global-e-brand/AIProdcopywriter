export const sortJSONArrayByValue = async (json, direction) => {
  return json.sort(function (a, b) {
    if (direction < 0) {
      return a.value - b.value;
    } else {
      return b.value - a.value;
    }
  });
};
