const postRouter = require('express').Router();
const {createPost,deletePost,pullPostByUser, pullStoresById} = require('../../queries/posts/posts')

postRouter.get("/:store_id", pullStoresById);
postRouter.get("/user/:user", pullPostByUser);
postRouter.post("/", createPost);
postRouter.delete("/:id", deletePost);

module.exports = postRouter