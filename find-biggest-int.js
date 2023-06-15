function checkBiggestInt(paramArray) {
    let biggestInt = 0;
    letStatusCheck = null; 

    for(let i=0; i<paramArray.length; i++) {
      if (biggestInt < paramArray[i]) {
        biggestInt = paramArray[i];
        statusCheck = "✅";
    } else {
        statusCheck = "❌";
    }
console.log(`${statusCheck} biggestInt = ${biggestInt} currentInt = ${paramArray[i]}`);
    }

const arrayInt = [12341,132413,1234132,123413,12341,1234123];
const resultBiggestInt = checkBiggestInt(arrayInt);
console.log(`The biggest int out of ${arrayInt} is ${resultBiggestInt}`);

}