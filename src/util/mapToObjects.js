/*
 * Creates array of `new klass(element)`
 * Example: mapToObjects([1, 2], Array) ===> [new Array(1), new Array(2)]
 */
function mapToObjects(array, klass) {
  return array.map(e => new klass(e));
}

export default mapToObjects
