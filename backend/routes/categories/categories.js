const categoryRouter = require('express').Router();
const {createCategories,deleteCategories,pullStoreByType, pullStoresById} = require('../../queries/categories/categories')

categoryRouter.get("/:store_id", pullStoresById);
categoryRouter.get("/type/:type_name", pullStoreByType);
categoryRouter.post("/", createCategories);
categoryRouter.delete("/:id", deleteCategories);

module.exports = categoryRouter