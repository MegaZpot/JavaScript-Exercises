// 1- Dado un JSON que contiene información sobre empleados, filtra aquellos cuyo salario sea mayor a 50000

// const res = {
//   "empleados": [
//     {"nombre": "Juan", "salario": 45000},
//     {"nombre": "María", "salario": 60000},
//     {"nombre": "Pedro", "salario": 55000},
//     {"nombre": "Laura", "salario": 48000}
//   ]
// }

// const solucion = res.empleados.filter(empleado=>empleado.salario>50000);
// console.log(solucion);


// 2- Dado un JSON que contiene información sobre productos, aumenta en un 10% el precio de todos los productos.

// const productos = {
//   "productos": [
//     {"nombre": "Camisa", "precio": 20},
//     {"nombre": "Pantalón", "precio": 30},
//     {"nombre": "Zapatos", "precio": 50}
//   ]
// };

// productos.productos.forEach(p=> p.precio *= 1.1);
// console.log(productos);


// 3-Dado un JSON que contiene información sobre libros, encuentra el libro con el mayor número de páginas.

// const libros = {
//   "libros": [
//     {"titulo": "La Odisea", "paginas": 300},
//     {"titulo": "Cien años de soledad", "paginas": 450},
//     {"titulo": "Don Quijote de la Mancha", "paginas": 600}
//   ]
// };

// const libroSol = libros.libros.reduce((acu, actual)=> (actual.paginas > acu.paginas) ? actual: acu);
// console.log(libroSol);


// 4- Dado un conjunto de productos con categorías, agrupa los productos por categoría

const productos = [
  {"nombre": "Camisa", "categoria": "Ropa"},
  {"nombre": "Pantalón", "categoria": "Ropa"},
  {"nombre": "Zapatos", "categoria": "Calzado"},
  {"nombre": "Teléfono", "categoria": "Electronica"},
  {"nombre": "Tablet", "categoria": "Electronica"},
  {"nombre": "Lámpara", "categoria": "Hogar"}
];

// const productoPorCategoria = {};
// for (const producto of productos) {
//     if (!productoPorCategoria[producto.categoria]){
//         productoPorCategoria[producto.categoria] = []
//     }
//     productoPorCategoria[producto.categoria].push(producto);
// }

// console.log(productoPorCategoria);

const productoPorCategoria = productos.reduce((acumulador, actual)=>{
    acumulador[actual.categoria]=acumulador[actual.categoria]||[];
    acumulador[actual.categoria].push(actual);
    return acumulador;
}, {});
console.log(productoPorCategoria);