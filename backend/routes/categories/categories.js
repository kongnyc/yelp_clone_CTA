const postRouter = require('express').Router();
const {createCategories,deleteCategories,pullStoreByType, pullStoresById} = require('../../queries/categories/categories')

postRouter.get("/:store_id", pullStoresById);
postRouter.get("/type/:type_name", pullStoreByType);
postRouter.post("/", createCategories);
postRouter.delete("/:id", deleteCategories);

module.exports = postRouter