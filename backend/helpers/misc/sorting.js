export const sortJSONArrayByProperty = async (json, property, direction) => {
  return json.sort(function (a, b) {
    if (direction < 0) {
      return a[property] - b[property];
    } else {
      return b[property] - a[property];
    }
  });
};
