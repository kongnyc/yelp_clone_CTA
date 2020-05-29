const yelpStoreRouter = require('express').Router();
const {createYelpStore,deleteYelpStore,pullStoresByName, pullStoresByAddress, pullStoresById} = require('../../queries/stores/stores.js')

yelpStoreRouter.get("/id/:id", pullStoresById)
yelpStoreRouter.get("/name/:name", pullStoresByName)
yelpStoreRouter.get("/location/:address", pullStoresByAddress)
yelpStoreRouter.post("/", createYelpStore)
yelpStoreRouter.delete("/", deleteYelpStore)

module.exports = yelpStoreRouter