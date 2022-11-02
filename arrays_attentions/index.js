//array
const array1 = ['a', 'b', 'c'];

//add d item to array1
array1.push('d');
console.log(array1);

const array2 = array1;
//spread operator or also can use slice
const array3 = [...array1, 'h'];
//change both array 1 and array2 
array2.push('e');


console.table(array1);
console.table(array2)
console.table(array3)