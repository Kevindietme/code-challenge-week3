// 1. declare a function and invoke the function by passing an argument to it's parameter
// 2. check the function by console.log the param 
// 3. loop the param: creat a for loop that loops through the param 
// 4. console.log the index (i) of the for loop 
// 5. console.log each value of the array paramArray[i]

// 1. check if each value of the array is odd 





function findOddNumber(paramArray) {
    
    let statusCheck = null;

    for(let i=0; i<paramArray.length; i++) {
      if(paramArray[i] % 2 !== 0) {
statusCheck = '✅';
      } else { 
statusCheck = '❌';
      }
      console.log(`${statusCheck} ${paramArray [i]}`);
    }
}


const thisArray = [2,4,14,16,17,11,18,133,1777,11345,44]
const result = findOddNumber(thisArray);