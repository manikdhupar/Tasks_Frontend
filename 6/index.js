// Given object
const givenObj = {
  a: ["x", "y", "z"],
  b: ["g", "e", "f"],
  c: ["h", "i", "j"]
};

// NOTE : if obj was nested, recursion would have been used

function dashSeparatedString(obj) {
  let str = "";
  for (let key in obj) {
    obj[key].forEach(el => {
      str += el;
      str += "-";
    });
  }
  str = str.substring(0, str.length - 1);
  return str;
}

console.log(dashSeparatedString(givenObj));

//------------------------------------------------------------------------------------

//PREFERED METHOD FOR LOOPING

/*
   FOR LOOPING ARRAYS ->
    1.) If i want to return a new ARRAY -
        POST ES6
        a) map - iterate on each element
        b) filter - USE CASE - like return children with age>=15(filter is handy over here)
        c) reduce - USE CASE - like sum of all ages of children
  
        PRE ES6
        use slice to create a copy of array and then iterate over it using forEach/for loop.
  
    2.) If i want to modify in the original array
        a) forEach
        b) normal for loop(has highest efficency according to stackOverflow)
        c) while loop
  
    For looping on objects
  
    1.) For in loop(post ES6)
    2.) Object.keys(convert into array of key value pairs)
  
    */
