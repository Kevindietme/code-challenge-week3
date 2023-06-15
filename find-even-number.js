



function findEvenNumber(paramArray) {

let statusCheck = null;

for(let i=0; i<paramArray.length; i++);
 if(paramArray[i] % 2 !==0){
    statusCheck = '✅';
 } else {
    statusCheck = '❌';
 }
 console.log(`${statusCheck} ${paramArray}`);
}


const newArray = [1,3,5,7,9,11,19,21,22];
findEvenNumber = (newArray);