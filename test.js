function flatten3(array) {
  return array.reduce(
    (arr, cur) =>
      Array.isArray(cur) ? [...arr, ...flatten3(cur)] : [...arr, cur],
    []
  );
}
