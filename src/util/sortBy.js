function sortBy(array, field) {
  return array.slice().sort((a, b) => a[field] < b[field] ? -1 : 1);
}

export default sortBy;
