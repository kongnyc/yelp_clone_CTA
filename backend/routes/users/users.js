const userRouter = require('express').Router();
const {createUser,deleteUser,pullUserByUsername, pullUserByEmail, pullUserById} = require('../../queries/users/users')

userRouter.get("/id/:id", pullUserById)
userRouter.get("/name/:username", pullUserByUsername)
userRouter.get("/email/:email", pullUserByEmail)
userRouter.post("/", createUser)
userRouter.delete("/", deleteUser)

module.exports = userRouter