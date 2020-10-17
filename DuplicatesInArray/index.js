// Find all duplicates in an array in linear time (Solution 1)
// This algorithm runs in O(n) time because it only needs to loop through the array once. 

function removeDuplicates(arr) {
    let hashTable = []; // { 2: true, 1: true, ... }

    for (let char of arr) {
        if (hashTable[String(char)] === undefined) {
            hashTable[String(char)] = 1;
        } else {
            hashTable[String(char)]++;
        }
    }

    return Object.keys(hashTable).filter(k => hashTable[k] === 1);
}


// Solution 2
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs([]);       // 0
Math.abs([2]);      // 2
Math.abs([1,2]);    // NaN
Math.abs({});       // NaN
Math.abs('string'); // NaN
Math.abs();         // NaN

function removeDuplicates2(arr) {
    let dups = [];

    for (let i = 0; i < arr.length; i++) {
      
      // get element in array
      let el = arr[Math.abs(arr[i])];
      
      // element in array is positive so make it negative
      if (el > 0) { arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])]; }
      
      // special case if element is zero
      // we set the value at this index to -arr.size as not to
      // mix this number up with the others because we know the
      // numbers are all in the range of 0 to n-1
      else if (el === 0) { arr[Math.abs(arr[i])] = -arr.length; }
      
      // element is negative so it is a duplicate
      else { 
        if (Math.abs(arr[i]) === arr.length) { dups.push(0); }
        else { dups.push(Math.abs(arr[i])); }
      }
      
    }
    // console.log(dups)
    return dups;
}

module.exports = removeDuplicates;