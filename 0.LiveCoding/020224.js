/* Dado un JSON que contiene información sobre empleados, filtra aquellos cuyo salario sea mayor a 50000


const empleados = {
    "empleados": [
      {"nombre": "Juan", "salario": 45000},
      {"nombre": "María", "salario": 60000},
      {"nombre": "Pedro", "salario": 55000},
      {"nombre": "Laura", "salario": 48000}
    ]
  };



console.log(empleados.empleados.filter(data => data.salario>50000))

 */

/* Dada una respuesta HTTP simulada que contiene datos de productos con sus categorías, transforma los datos para obtener un objeto que contenga las categorías como claves y el número total de productos en cada categoría como valores. */
/* (respuesta, categoria)
{ Ropa: 2, Calzado: 1, 'Electrónica': 2, Hogar: 1 }
 */
/* 
const respuestaHTTP = {
  "status": 200,
  "message": "OK",
  "data": {
    "productos": [
      {"nombre": "Camisa", "categoria": "Ropa"},
      {"nombre": "Pantalón", "categoria": "Ropa"},
      {"nombre": "Zapatos", "categoria": "Calzado"},
      {"nombre": "Teléfono", "categoria": "Electronica"},
      {"nombre": "Tablet", "categoria": "Electronica"},
      {"nombre": "Lámpara", "categoria": "Hogar"}
    ]
  }
};

const obtenerNumeroProductosPorCategoria = (respuesta) => {
    return respuesta.data.productos.reduce((acc,producto)=>{
        acc[producto.categoria]=(acc[producto.categoria]||0)+1;        
        return acc;

    },{})
  };

console.log(obtenerNumeroProductosPorCategoria(respuestaHTTP));

 */

/* 
Dada una respuesta HTTP simulada que contiene datos de libros con sus autores, busca un libro por título y filtra los libros por un rango de años de publicación.
 */
/* 
const respuestaHTTP = {
    "status": 200,
    "message": "OK",
    "data": {
      "libros": [
        {"titulo": "La Odisea", "autor": "Homero", "publicacion": 800},
        {"titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "publicacion": 1967},
        {"titulo": "Don Quijote de la Mancha", "autor": "Miguel de Cervantes", "publicacion": 1605}
      ]
    }
  };

function buscarLibroPorTitulo (respuesta,libro) {
  return respuesta.data.libros.find(data=> data.titulo === libro)
}

function filtrarLibrosPorRangoDePublicacion (respuesta,añoInicio,añoFin) {
  return respuesta.data.libros.filter(data=>añoInicio<=data.publicacion<=añoFin)

}


console.log(buscarLibroPorTitulo(respuestaHTTP, "La Odisea"));
console.log(filtrarLibrosPorRangoDePublicacion(respuestaHTTP, 800, 1700));
 */

/* Dadas dos respuestas HTTP simuladas que contienen datos de usuarios y sus pedidos, combina los datos para obtener información detallada sobre los usuarios y sus pedidos.
 */
const respuestaUsuarios = {
  "status": 200,
  "message": "OK",
  "data": {
    "usuarios": [
      {"id": 1, "nombre": "Juan"},
      {"id": 2, "nombre": "María"},
      {"id": 3, "nombre": "Pedro"}
    ]
  }
};
const respuestaPedidos = {
  "status": 200,
  "message": "OK",
  "data": {
    "pedidos": [
      {"id": 101, "usuarioId": 1, "producto": "Camisa"},
      {"id": 102, "usuarioId": 2, "producto": "Pantalón"},
      {"id": 103, "usuarioId": 1, "producto": "Zapatos"}
    ]
  }
};

//Método forEach

/* 
const combinarUsuariosYPedidos = (respuestaUsuarios, respuestaPedidos) => {
  const usuariosYPedidos=[];
  respuestaUsuarios.data.usuarios.forEach(usuario => {
  const pedidosDeUsuario = respuestaPedidos.data.pedidos.filter(pedido=>pedido.usuarioId===usuario.id);
  usuariosYPedidos.push({...usuario,pedidos:pedidosDeUsuario})
  })
  return usuariosYPedidos;
}
 */

//Método .map

const combinarUsuariosYPedidos = (respuestaUsuarios, respuestaPedidos) => {
  const usuarios = respuestaUsuarios.data.usuarios;
  const pedidos = respuestaPedidos.data.pedidos;
  return usuarios.map(usuario => {
    const pedidosUsuario = pedidos.filter(pedido => pedido.usuarioId === usuario.id);
    return { ...usuario, pedidos: pedidosUsuario };
  });
};


console.log(JSON.stringify(combinarUsuariosYPedidos(respuestaUsuarios, respuestaPedidos)));
