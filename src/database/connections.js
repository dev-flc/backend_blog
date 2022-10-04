import dotenv from "dotenv"
import { connect } from "mongoose"

dotenv.config()

const { PASS_MONGODB } = process.env

const connectMongo = async () => connect(PASS_MONGODB)

export { connectMongo }
