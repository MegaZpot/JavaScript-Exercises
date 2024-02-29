// 5-  Dado un conjunto de datos de estudiantes con sus calificaciones, calcula el promedio, mínimo y máximo de calificaciones.
// const estudiantes = [
//   {"nombre": "Juan", "calificaciones": [80, 75, 90, 85]},
//   {"nombre": "María", "calificaciones": [85, 90, 88, 92]},
//   {"nombre": "Pedro", "calificaciones": [70, 65, 68, 72]}
// ];

// const promedios =estudiantes.map(estudiante=>{
//     const promedio=estudiante.calificaciones.reduce((acum,calificacion)=>acum+calificacion,0)/estudiante.calificaciones.length;
//     const minimo= Math.min(...estudiante.calificaciones);
//     const maximo= Math.max(...estudiante.calificaciones);
//     return {nombre: estudiante.nombre,promedio,minimo,maximo};
// })
// console.log(promedios);



// Dadas dos respuestas HTTP simuladas que contienen datos de usuarios y pedidos, 
// combina los datos para obtener información sobre los usuarios y sus pedidos.
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

function combinarUsuariosPedidos(usuarios,pedidos){
    const listUsuarios=usuarios.data.usuarios;
    const listPedidos= pedidos.data.pedidos;
    const usuariosConPedidos= listUsuarios.map((usuario)=>{
        usuario.pedidos=listPedidos.filter(p=>p.usuarioId===usuario.id);
        return usuario;
    })
    return usuariosConPedidos;
}

console.log(JSON.stringify(combinarUsuariosPedidos(respuestaUsuarios,respuestaPedidos)));