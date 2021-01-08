const obj = {
    left: 1,
    right: 2
};

console.log(obj);
console.log(obj.left);

delete obj.left;

console.log(obj);
console.log(obj.left);

console.log('left' in obj);
console.log('right' in obj);

//=================================

const array = [11, 22]

console.log(array)
console.log(array[0]);

console.log(0 in array);
console.log(1 in array);
console.log(2 in array);

delete array[0];

console.log(array);
console.log(array[0]);

console.log(0 in array);
console.log(1 in array);
console.log(2 in array);

