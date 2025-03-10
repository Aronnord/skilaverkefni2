// Write a function that takes two numbers (a and b) as argument
//  Sum a and b
// Return the result
const calcSum = (a, b) => {
    return a + b
  }

 console.log(calcSum(1,2));
 console.log(calcSum(1,10));
 console.log(calcSum(99,1));
  
  /*
  Test cases:
  calcSum(1,2) Expected 3
  calcSum(1,10) Expected 11
  calcSum(99,1) Expected 100
  */
  
  // ========================================
  
  // Write a function that takes two values, say a and b, as arguments
  // Return true if the two values are equal and of the same type
  const strictEquality = (a, b) => {
    return a == b && typeof a == typeof b;
  };
console.log(strictEquality(2,3));
console.log(strictEquality(3,3));
console.log(strictEquality(1,'1'));
console.log(strictEquality('10', '10'));

  
  /*
  Test cases:
  myFunction(2, 3) Expected false
  myFunction(3, 3) Expected true
  myFunction(1, '1') Expected false
  myFunction('10', '10') Expected true 
  */
  
  // ========================================
  
  // Write a function that takes a value as argument
  // Return the type of the value
  const getTypeOfValue = (a) => {
    return typeof a;
  };

  console.log(getTypeOfValue(1));
  console.log(getTypeOfValue(false));
  console.log(getTypeOfValue({}));
  console.log(getTypeOfValue(null));
  console.log(getTypeOfValue('string'));
  console.log(getTypeOfValue(['array']));
  
  /*
  Test cases:
  myFunction(1) Expected 'number'
  myFunction(false) Expected 'boolean'
  myFunction({}) Expected 'object'
  myFunction(null) Expected 'object'
  myFunction('string') Expected 'string'
  myFunction(['array']) Expected 'object'
  */
  
  // ========================================
  
  // Write a function that takes a string (a) as argument
  // Return the 1st character of the strgin a
  // Tip: look up the string prototype function slice() or split()
  const getFirstChar = (a, n) => {
    const [firstChar] = a;
    return firstChar;
  };

  console.log(getFirstChar('abc'));
  console.log(getFirstChar('zyxbwpl'));
  console.log(getFirstChar('gfedcba'));
  
  /*
  Test Cases:
  myFunction('abcd') Expected 'a'
  myFunction('zyxbwpl') Expected 'z'
  myFunction('gfedcba') Expected 'g'
  */
  
  // ========================================
  
  // Write a function that takes a string (a) and a number (n) as argument
  // Return the nth character of 'a'
  // Tip: look up the string prototype function slice() or split()
  const getNthChar = (a, n) => {
    return a.split("")[n - 1];
  }
  
console.log(getNthChar('abcd',1));
console.log(getNthChar('zyxbwpl',5));
console.log(getNthChar('gfedcba', 3));

  /*
  Test Cases:
  myFunction('abcd',1) Expected 'a'
  myFunction('zyxbwpl',5) Expected 'w'
  myFunction('gfedcba',3) Expected 'e'
  */
  
  // ========================================
  
  // Write a function that takes a string (a) as argument
  // Extract the first half a
  // Return the result
  // Tip: look up the string prototype function slice() or split()
  const extractFirstHalfOfString = (a) => {
    const halfIndex = Math.ceil(a.length / 2);
    return a.slice(0, halfIndex);
  };

  console.log(extractFirstHalfOfString('abcdefgh'));
  console.log(extractFirstHalfOfString('1234'));
  console.log(extractFirstHalfOfString('gedcba'));
  
  /*
  Test Cases:
  myFunction('abcdefgh') Expected 'abcd'
  myFunction('1234') Expected '12'
  myFunction('gedcba') Expected 'ged'
  */
  
  // ========================================
  
  // Write a function that takes a string (a) as argument
  // Remove the last 3 characters of a
  // Return the result
  const removeLastNChractersOfString = (a) => {
    return a.slice(0, -3);
  };

  console.log(removeLastNChractersOfString('abcdefg'));
  console.log(removeLastNChractersOfString('1234'));
  console.log(removeLastNChractersOfString('fgedcba'));
  
  /*
  Test cases:
  myFunction('abcdefg') Expected 'abcd'
  myFunction('1234') Expected '1'
  myFunction('fgedcba') Expected 'fged'
  */
  
  // ========================================
  
  // Write a function that takes a number as argument
  // If the number is even, return true
  // Otherwise, return false
  // Tip: How does the % operator work?
  const checkIfNumberIsEven = (a) => {
    return a % 2 === 0;
  };

  console.log(checkIfNumberIsEven(10));
  console.log(checkIfNumberIsEven(-4));
  console.log(checkIfNumberIsEven(5));
  console.log(checkIfNumberIsEven(-111));
  
  /*
  Test Cases:
  myFunction(10) Expected true
  myFunction(-4) Expected true
  myFunction(5) Expected false
  myFunction(-111) Expected false
  */
  
  // ========================================
  
  // Write a function that takes two numbers (a and b) as argument
  // Return b percent of a
  const getPercentageOfNumber = (a, b) => {
    return
  }
  
  /*
  Test cases:
  myFunction(100,50) Expected 50
  myFunction(10,1) Expected 0.1
  myFunction(500,25) Expected 125
  */
  
  // ========================================
  
  // Write a function that takes 6 values (a,b,c,d,e,f) as arguments
  // Sum a and b
  // Then substract by c
  // Then multiply by d and divide by e
  // Finally raise to the power of f and return the result
  // Tip:
  // - Mind the order
  // - Power operator is either Math.pow or **
  //   - e.g. 2**2 = 4
  const useAllTheOperators = (a, b, c, d, e, f) => {
    const sum = a+ b;
    const substraction = sum - c;
    const multiplication = substraction * d;
    const division = multiplication / e;
    const result = Math.pow(division, f);
    return result;
  };

  console.log(useAllTheOperators(6,5,4,3,2,1));
  console.log(useAllTheOperators(6,2,1,4,2,3));
  console.log(useAllTheOperators(2,3,6,4,2,3));
  
  /*
  Test cases:
  myFunction(6,5,4,3,2,1) Expected 10.5
  myFunction(6,2,1,4,2,3) Expected 2744
  myFunction(2,3,6,4,2,3) Expected -8
  */
  
  // ========================================
  