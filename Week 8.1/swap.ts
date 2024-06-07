function swap<T, U>(a: T, b: U): [U, T] {
    return [b ,a];
}

const ans = swap(1, 2);
console.log(ans);
