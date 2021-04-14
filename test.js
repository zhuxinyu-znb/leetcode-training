function curry(fn) {
    let len = fn.length
    return function curried(...args) {
        if(args.length === len) {
            return fn.apply(null, args);
        }
        return (..._args) => {
            return curried.apply(null, [...args, ..._args])
        }
    }
}
