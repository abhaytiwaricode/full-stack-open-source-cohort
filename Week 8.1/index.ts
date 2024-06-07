
function getFirstItem<T>(arr: T[]) {
    return arr[0];
}

let a = getFirstItem([1, 2, 3]);
let b = getFirstItem(['one', 'two', 'three']);
console.log(a);
console.log(b);
