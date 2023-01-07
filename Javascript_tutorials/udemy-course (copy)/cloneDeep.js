var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
export default cloneDeep;