const db = require ("../../db/index")

const pullStoresById = async (req,res,next)=>{
    try{
        let storeByID = await db.any(`SELECT posts.id, posts.user_id, users.username, posts.content, posts.time_stamp FROM posts JOIN users ON posts.user_id = users.id WHERE store_id = ${req.params.store_id} ORDER BY time_stamp DESC`);
        // let storeByID = await db.any(`SELECT * FROM posts WHERE store_id = $1 RETURNING *`, [res.params.store_id]);
        res.status(200).json({
            status: 'success',
            payload: storeByID,
            message: 'retrieves post by Store_ID',
        })
    }catch(error){
        res.status(400).json({
            status: error,
            message: 'could not retrieve post by Store_ID'
        })
    }
}

const pullPostByUser = async (req,res,next)=>{
    try{
        let allPostsByUser = await db.any(`SELECT * FROM posts JOIN users ON posts.user_id = users.id WHERE username = $1 ORDER BY time_stamp DESC`, [req.params.user])
        res.status(200).json({
            status: 'success',
            message: 'retrieves all posts by user',
            payload: allPostsByUser
        })
    }catch(error){
        res.status(400).json({
            status: error,
            message: 'could not retrieve all posts by user'
        })
    }
}


const createPost = async (req, res, next)=>{
    try {
        await db.none('INSERT INTO Posts (user_id, store_id, content) VALUES(${user_id}, ${store_id}, ${content})', req.body)
        res.status(200).json({
            status:'success',
            message:'create new post',
            payload:req.body
        })
    } catch (error) {
        res.status(400).json({
            status: error,
            message: "didn't create new post"
        })
    }
}

const deletePost = async (req, res, next)=>{
    try {
        let deletePost = await db.one(`DELETE FROM Posts WHERE id = ${req.params.id} RETURNING *`);
        res.status(200).json({
            status:'success',
            message:'delete post',
            payload:deletePost
        })
    } catch (error) {
        res.status(400).json({
            status: error,
            message: "didn't delete post"
        })
    }
}

module.exports = {createPost,deletePost,pullPostByUser, pullStoresById}