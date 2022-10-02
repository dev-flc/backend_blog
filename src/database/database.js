// Invocamos a MySQL y realizamos la conexion
import { conexionMysql } from "./conections.js"

conexionMysql.connect((error) => {
  if (error) {
    console.error("El error de conexión es: " + error)
    return
  }
  console.log("¡Conectado a la Base de Datos!")
})

export { conexionMysql as conexion }
