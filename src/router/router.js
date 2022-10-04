import express from "express"

import { postUserSave, getUserList } from "./../services/users/users.js"

const router = express.Router()

router.get("/list-users", getUserList)

router.post("/save-user", postUserSave)

export { router }
