const isLogged = true;

const firstPromise = new Promise((resolve, reject) => {
    if(isLogged===true){
        const randomNumber = Math.random();
        resolve(randomNumber);
    }else{
        reject(new Error('Not logged'));
    }
})

const secondPromise = (inputNumber) => {
    return new Promise((resolve, reject) => {
        if(inputNumber > 0.5) {
            resolve({name:"John", age:24});
        }else{
            reject(new Error('Input number is not greater than 0.5'));
        }
    })
} 

firstPromise
.then((randomNumber) => secondPromise(randomNumber))
.then((finalObject)=> {
    console.log('Final Object:', finalObject);
})
.catch((error) => {
    console.error('Error', error.message)
})
.finally(()=>{
    console.log('This will be executed regardless of success or failure')
})