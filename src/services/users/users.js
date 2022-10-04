import { usersMongo } from "../../models/users/usersMongo.js"
import dotenv from "dotenv"
import { Telegraf } from "telegraf"

dotenv.config()

const { PASS_TELEGRAM } = process.env

const bot = new Telegraf(PASS_TELEGRAM)

bot.start((ctx) => {
  console.log("ctx==>", ctx)
  ctx.reply(`CHAT_ID: ${ctx.message.chat.id}`)
})

bot.help((ctx) => {
  console.log("ctx==>", ctx)
  ctx.reply("H E L P")
})

bot.settings((ctx) => {
  console.log("ctx==>", ctx)
  ctx.reply("S E T T I N G S")
})

bot.command("examplessss", (ctx) => {
  ctx.reply("My Custom comman example")
})

bot.command(["example", "Example", "EXAMPLE"], (ctx) => {
  ctx.reply(`CHAT_ID: ${ctx.message.chat.id}`)
})

bot.hears("ayuda", (ctx) => {
  ctx.reply("necesitas ayuda ..?")
})

bot.launch()

// List Users
export const getUserList = async (request, response) => {
  await usersMongo
    .find()
    .then((data) => {
      return response.status(200).send(data)
    })
    .catch((error) => {
      return response.status(422).send({ message: error.message })
    })
}

// Save User
export const postUserSave = async (request, response) => {
  response.set({
    "Content-Type": "application/json",
  })
  const newUser = usersMongo(request.body)

  try {
    const data = await newUser.save()
    return response.send({ code: 200, data })
  } catch (error) {
    let responseMessage = {
      url: request.url,
    }

    if (error.name === "ValidationError") {
      const message = {}
      Object.keys(error.errors).forEach((key) => {
        message[key] = error.errors[key].message
        message.key = key
      })
      responseMessage = {
        ...responseMessage,
        messageDev: error._message,
        message: message[message.key],
        code: 422,
      }
    } else if (error.name === "MongoServerError" && error.code === 11000) {
      responseMessage = {
        ...responseMessage,
        message: "The data already exists",
        messageDev: `The data already exists: ${JSON.stringify(
          error.keyValue
        )}`,
        code: 422,
      }
    } else {
      responseMessage = {
        ...responseMessage,
        messageDev: "Bad Request",
        message: "Bad Request",
        code: 400,
      }
    }

    bot.telegram.sendMessage(1574317938, JSON.stringify(responseMessage))

    return response.status(responseMessage.code).send(responseMessage)
  }
}
