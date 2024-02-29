//Utiliza callbacks para imprimir 'Hola' y 'Mundo' en orden.

/* 
function saludar(saludo,segundoParametro){
    console.log(saludo+segundoParametro);
}

setTimeout(saludar,1000,"Hola ","Mundo")
     */

// Utiliza promesas para imprimir 'Bienvenido' y 'a la programación asíncrona' en orden

/* function bienvenido(programacionAsync){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            console.log("Bienvenido ")
            resolve()
        },1000)        

    })
}

function programacionAsync(){
    console.log("a la programación asíncrona")
}

bienvenido().then(programacionAsync) */

//Utiliza async/await para imprimir 'JavaScript' y 'es poderoso' en orden

/* function javascript(){
    return new Promise((resolve) => {
        setTimeout(()=>{

            resolve("Javascript");

        },1000)
    })
}

function poderoso(){
    return new Promise((resolve) => {
        resolve("es poderoso");
    })
}

async function jsPoderoso(){
    
   try{
    const var1=await javascript();
    const var2=await poderoso();
    console.log(var1,var2);
   }catch(error){
    console.error(error.message);
   }
}

jsPoderoso();

 */

//4-Imprime 'Primero' y 'Segundo' en paralelo utilizando Promise.all

/* 
function primero(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Primero");
            resolve();
        },1500)
    })
}


function segundo(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Segundo");
            resolve();
        },1000)
    })
}


Promise.all([primero(),segundo()])

 */

//5-Utiliza Promise.all con manejo de errores para imprimir 'Éxito' o 'Fracaso'.
//con dos funciones que retornan promesas

/* function promesa1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Éxito");
    }, 1500);
  });
}

function promesa2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("operación fallida"));
    }, 1000);
  });
}

Promise.all([promesa1(), promesa2()])
  .then((resultados) => {
    console.log(resultados[0]);
  })
  .catch((err) => console.error(err.message)); */
/* 
  
  function funcionExitosa() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Éxito');
        }, 1000);
    });
}

function funcionFallida() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Fracaso');
        }, 1000);
    });
}

const promesaExitosa = funcionExitosa();
const promesaFallida = funcionFallida();

Promise.all([promesaExitosa, promesaFallida])
    .then(resultados => {
        console.log(resultados[0]); 
        console.log(resultados[1]);
    })
    .catch(error => {
        console.error('Hubo un error:', error);
    });

     */