const typesRouter = require('express').Router();
const {createType,deleteType,pullTypeByName, pullTypeById} = require("../../queries/types/types")

typesRouter.get("/:id", pullTypeById)
typesRouter.get("/name/:name", pullTypeByName)
typesRouter.post("/", createType)
typesRouter.delete("/", deleteType)

module.exports = typesRouter