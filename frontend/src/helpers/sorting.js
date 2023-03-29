export const sortJSONArrayByValue = (json, direction) => {
  json.sort(function (a, b) {
    if (direction < 0) {
      return a.value - b.value;
    } else {
      return b.value - a.value;
    }
  });

  return json;
};
