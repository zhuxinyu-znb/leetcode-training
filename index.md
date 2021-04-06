## 数据类型判断 typeof

```javascript
function _typeof(obj) {
  let res = Object.prototype.toString.call(obj).split(" ")[1];
  res = res.substring(0, res.length - 1).toLowerCase();
  return res;
}
_typeof(null)        // 'null'
_typeof(undefined)        // 'undefined'
_typeof('s')        // 'string'
_typeof(1)        // 'number'
_typeof([])        // 'array'
_typeof({})        // 'object'
_typeof(new Date)  // 'date'
_typeof(new Set())  // 'set'
_typeof(new Map())  // 'map'
```

## 继承

```javascript
function Father() {
  this.name = "father";
  this.age = 40;
}

Father.prototype.say = function() {
  console.log(111);
};

function Son() {
  Father.call(this);
  this.age = 18;
}

Son.prototype = Object.create(Father.prototype, {
  constructor: {
    value: Son
  }
});
```

## 数组去重

ES6
```javascript
const unique = arr => [...new Set(arr)]
```

ES5
```javascript
// 方法一
function unique1(arr) {
    var res = arr.filter(function(item, index, array) {
        return array.indexOf(item) === index
    })
    return res
}

// 方法二
function unique2(arr) {
    let map = {};
    let _res = [];
    for(let i = arr.length - 1; i > 0; i--) {
        if(!map[arr[i]]) {
            _res.push(arr[i]);
            map[arr[i]] = true;
        }
    }
    return _res;
}

```