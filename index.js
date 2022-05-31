// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   //   for (let i = 0; i < array.length; i++) {
//   //     let cNum = array[i]; //my current number
//   //     for (let j = i; j < array.length; j++) {
//   //       if (cNum !== array[j] && cNum + array[j] === target) {
//   //         let pair = {};
//   //         pair.key1 = cNum;
//   //         pair.key2 = array[j];
//   //         console.log(pair);
//   //       }

//   //     }
//   //   }
//   // }

//   const lookup = {};

//   for (let i = 0; i < array.length; i++) {
//     const num = array[i];

//     if (lookup[num] === undefined) {
//       lookup[num] = i;
//     }

//     if (lookup[target - num] !== undefined && lookup[target - num] !== i) {
//       return [target - num, num];
//     }
//   }

//   return undefined;
// }
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i]
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true
    }
  }
  return false
}







/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
// add the first number in the array to the last number to the last number
Compare solution to the target integer
If they equal one another, stop
If they dont equal one another, add the first number in the array to the second to last number. and so on, until finding a match.

// /*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
