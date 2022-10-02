import mysql from "mysql"
import dotenv from "dotenv"

dotenv.config()

const { HOST, USER_DATABASE, DATABASE, PASS_MYSQL } = process.env

const conexionMysql = mysql.createConnection({
  host: HOST,
  user: USER_DATABASE,
  password: PASS_MYSQL,
  database: DATABASE,
})

export { conexionMysql }
