import express from "express"

import { postUserSave, getUserList } from "./../services/users/users.js"

const router = express.Router()

router.post("/save", postUserSave)

router.get("/users", getUserList)

export { router }
