const isLogged = true;

const firstPromise = new Promise((resolve, reject) => {
    if(isLogged===true){
        const randomNumber = Math.random();
        resolve(randomNumber);
    }else{
        reject('Not logged');
    }
})

const secondPromise = (inputNumber) => {
    return new Promise((resolve, reject) => {
        if(inputNumber > 0.5) {
            resolve({name:"John", age:24});
        }else{
            reject('Input number is not greater than 0.5');
        }
    })
} 

firstPromise
.then((randomNumber) => secondPromise(randomNumber))
.then((finalObject)=> {
    console.log('Final Object:', finalObject);
})
.catch((error) => {
    console.log('Error', error)
})