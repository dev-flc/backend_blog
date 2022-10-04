import express from "express"

import { router } from "./src/router/router.js"
import { connectMongoDB } from "./src/database/database.js"

connectMongoDB()

const app = express()

app.use(express.json())

app.use("/", router)

app.listen(process.env.PORT || 3002, () => {
  console.log(
    `SERVER corriendo en http://localhost:${process.env.PORT || 3002}`
  )
})
