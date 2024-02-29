/* Crea una función llamada esPar que tome un número como parámetro y devuelva una promesa que se resuelva con un mensaje indicando si el número es par o no */


function esPar(numero,call){
return new Promise((resolve,reject)=>{
    if(typeof(numero) !== "number"){
        reject("NaN")
    }else{
        if(numero%2 === 0){
            resolve("Es par")
        }else{
            resolve("Es impar")
        }
    }
})
}

esPar("a")
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.error(error)
})


/* crear una funcion que verifique si es par o impar un numero */

let checkEven = (argumento) => {
    return argumento % 2 === 0;
}