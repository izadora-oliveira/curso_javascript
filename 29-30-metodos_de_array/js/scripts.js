// length

var array = [1,2,3,4,5];

console.log(array.length);

// push

array.push(6);
array.push('qualquer coisa');

console.log(array); 

// pop

array.pop();

console.log(array);

// unshift

array.unshift(0);
console.log(array);

// shift
array.shift();
console.log(array);

// acessar o último elemento

console.log(array[array.length -1]);

// isArray

console.log(Array.isArray(5));
console.log(Array.isArray(array));

//parte 2

// splice

array.splice(2,0,999);

console.log(array);

array.splice(4,1);

console.log(array);

//indexOf

console.log(array.indexOf(5));

// join

var array2 = ["0","rato","roeu","a","roupa"];
console.log(array2.join(","));

//reverse

console.log(array2.reverse());



