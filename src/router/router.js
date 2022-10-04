import express from "express"

import { postUserSave, getUserList } from "./../services/users/users.js"

const router = express.Router()

router.get("/list", getUserList)

router.post("/save", postUserSave)

export { router }
