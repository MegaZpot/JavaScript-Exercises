const number = 2;

const checkNumberPromise = new Promise((resolve, reject) => {
    if(number>10) {
        resolve('Number is greater than 10')
    } else {
        reject('Number is not greater than 10')
    }
});

checkNumberPromise.then((result) => {
    console.log('Resolve:', result)
}).catch((error)=> {
    console.log('Reject:', error)
});