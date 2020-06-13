const userRouter = require('express').Router();
const {createUser, deleteUser, pullUserByUsername, pullUserByEmail, pullUserById} = require('../../queries/users/users')

userRouter.get("/name/", pullUserByUsername);
userRouter.get("/email/:email", pullUserByEmail);
userRouter.get("/:id/", pullUserById);
userRouter.post("/", createUser)
userRouter.delete("/", deleteUser)

module.exports = userRouter