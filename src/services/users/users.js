import _ from "lodash"

import { conexion } from "./../../database/database.js"
const { keyBy } = _

let result = {
  code: 200,
  message: "Internal Server Error",
  messageDev: "",
}
/*
application/json
application/x-javascript
text/javascript
text/x-javascript
text/x-json

res.sendStatus(200); // equivalent to res.status(200).send('OK')
res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
*/

// List Users
export const getUserList = (request, response) => {
  conexion.query("SELECT * FROM users", (error, results) => {
    if (error) {
      result = { ...result, messageDev: error.sqlMessage, code: 500 }
      response.set({
        "Content-Type": "application/json",
      })
      response.status(500).send(result)
      // throw error;
    } else {
      const convertObjectUsers = keyBy(results, "id_user")
      response.send(convertObjectUsers)
    }
  })
}

// GUARDAR un REGISTRO
export const postUserSave = (req, res) => {
  const user = req.body.user
  const rol = req.body.rol
  conexion.query("INSERT INTO users SET ?", { user, rol }, (error, results) => {
    if (error) {
      console.log(error)
    } else {
      res.send({
        status: "Ok",
      })
    }
  })
}

// ACTUALIZAR un REGISTRO
export const update = (req, res) => {
  const id = req.body.id
  const user = req.body.user
  const rol = req.body.rol
  conexion.query(
    "UPDATE users SET ? WHERE id = ?",
    [{ user, rol }, id],
    (error, results) => {
      if (error) {
        console.log(error)
      } else {
        res.redirect("/")
      }
    }
  )
}
