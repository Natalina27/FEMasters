//==== Object , delete , in =======
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
//==== Array , delete , in ========

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

//=================================
//==== Object , Object.keys =======

console.log('keys', Object.keys(obj));
//=================================
//==== Object , Object.assign =====
const obj1 = {
    up: 3,
    down: 4
};
console.log(Object.assign(obj, obj1));
console.log({...obj, ...obj1});

console.log(Object.assign(obj1, obj));
console.log({...obj1, ...obj});

console.log('keys', Object.keys(obj));

