


function setBlastOff(countDown) {
console.log('Blast off in...');
    for(let i=countDown; i>=0; i--) {
    

        if (i === 0) 
          console.log('Blast off 🛸');
    } else {
        let countDownText = i + "*".repeat(i);  
        console.log(countDownText);
    }
}

const blastOff = setBlastOff(10)
