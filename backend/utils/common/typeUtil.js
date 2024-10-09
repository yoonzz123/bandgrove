
const getType = (target) => Object.prototype.toString.call(target).slice(8, -1);

const isStr = (target) => getType(target) === 'String';
const isNotStr = (target) => getType(target) !== 'String';

const isNum = (target) => getType(target) === 'Number';
const isNotNum = (target) => getType(target) !== 'Number';

const isArr = (target) => getType(target) === 'Array';
const isNotArr = (target) => getType(target) !== 'Array';

const isObj = (target) => getType(target) === 'Object';
const isNotObj = (target) => getType(target) !== 'Object';

const isFunc = (target) => getType(target) === 'Function';
const isNotFunc = (target) => getType(target) !== 'Function';

export const typeUtil = {
  getType,
  isStr,
  isNotStr,
  isNum,
  isNotNum,
  isArr,
  isNotArr,
  isObj,
  isNotObj,
  isFunc,
  isNotFunc
}