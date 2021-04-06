## 数据类型判断 typeof

```javascript
function _typeof(obj) {
  let res = Object.prototype.toString.call(obj).split(" ")[1];
  res = res.substring(0, res.length - 1).toLowerCase();
  return res;
}
_typeof(null); // 'null'
_typeof(undefined); // 'undefined'
_typeof("s"); // 'string'
_typeof(1); // 'number'
_typeof([]); // 'array'
_typeof({}); // 'object'
_typeof(new Date()); // 'date'
_typeof(new Set()); // 'set'
_typeof(new Map()); // 'map'
```

## 继承

```javascript
function Father() {
  this.name = "father";
  this.age = 40;
}

Father.prototype.say = function () {
  console.log(111);
};

function Son() {
  Father.call(this);
  this.age = 18;
}

Son.prototype = Object.create(Father.prototype, {
  constructor: {
    value: Son,
  },
});
```

## 数组去重

ES6

```javascript
const unique = (arr) => [...new Set(arr)];
```

ES5

```javascript
// 方法一
function unique1(arr) {
  var res = arr.filter(function (item, index, array) {
    return array.indexOf(item) === index;
  });
  return res;
}

// 方法二
function unique2(arr) {
  let map = {};
  let _res = [];
  for (let i = arr.length - 1; i > 0; i--) {
    if (!map[arr[i]]) {
      _res.push(arr[i]);
      map[arr[i]] = true;
    }
  }
  return _res;
}
```

## 数组扁平化

```javascript
// 方法一
function flatten1(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

// 方法二  普通递归
function flatten2(arr) {
  var result = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// 方法三  reduce 递归
function flatten3(array) {
  return array.reduce(
    (arr, cur) =>
      Array.isArray(cur) ? [...arr, ...flatten3(cur)] : [...arr, cur],
    []
  );
}
```

## 深拷贝

```javascript
const isComplexDataType = (obj) =>
  (typeof obj === "object" || typeof obj === "function") && obj !== null;

const deepClone = function (obj, hash = new WeakMap()) {
  // 如果成环了,参数obj = obj.loop = 最初的obj
  // 会在WeakMap中找到第一次放入的obj提前返回第一次放入WeakMap的cloneObj
  if (hash.has(obj)) return hash.get(obj);
  let type = [Date, RegExp, Set, Map, WeakMap, WeakSet];
  if (type.includes(obj.constructor)) return new obj.constructor(obj);

  let allDesc = Object.getOwnPropertyDescriptors(obj); //遍历传入参数所有键的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc); //继承原型
  hash.set(obj, cloneObj);
  for (let key of Reflect.ownKeys(obj)) {
    //Reflect.ownKeys(obj)可以拷贝不可枚举属性和符号类型
    // 如果值是引用类型(非函数)则递归调用deepClone
    cloneObj[key] = isComplexDataType(obj[key])
      ? deepClone(obj[key], hash)
      : obj[key];
  }
  return cloneObj;
};
```

## 发布订阅

## 解析 URL 参数为对象

## 字符串模板

## 图片懒加载

## 函数防抖

## 函数节流

## 函数柯里化

## 偏函数

## JSONP

## AJAX

## forEach

## map

## filter

## some

## reduce

## call

## apply

## bind

## 实现 new 关键字

## 实现 instanceof 关键字

## 实现 Object.create

## 实现 Object.assign

## 实现 JSON.stringify

## 实现 JSON.parse

## 实现 Promise

## Promise.resolve

## Promise.reject

## Promise.all

## Promise.race

## Promise.allSettled

## Promise.any

## 