const db = require ("../../db/index")

const pullStoresById = async (req,res,next)=>{
    try{
        let storeByID = await db.any('SELECT name FROM categories JOIN types ON categories.type_id = types.id WHERE store_id = $1', [req.params.store_id])
        res.status(200).json({
            status: 'success',
            message: 'retrieves categories by Store_ID',
            payload: storeByID
        })
    }catch(error){
        res.status(400).json({
            status: error,
            message: 'could not retrieve categories by Store_ID'
        })
    }
}

const pullStoreByType = async (req,res,next)=>{
    try{
        let allStoreByType = await db.any(`SELECT * FROM categories JOIN types ON categories.type_id = types.id WHERE name Like '%${req.params.type_name}%'`)
        res.status(200).json({
            status: 'success',
            message: 'retrieves all stores by types',
            payload: allStoreByType
        })
    }catch(error){
        res.status(400).json({
            status: error,
            message: 'could not retrieve all store by types'
        })
    }
}


const createCategories = async (req, res, next)=>{
    try {
        await db.none('INSERT INTO categories (store_id, type_id) VALUES($1, $2)', [req.body.store_id, req.body.type_id])
        res.status(200).json({
            status:'success',
            message:'create new categories',
            payload:req.body
        })
    } catch (error) {
        res.status(400).json({
            status: error,
            message: "didn't create new categories"
        })
    }
}

const deleteCategories = async (req, res, next)=>{
    try {
        let deletePost = await db.one(`DELETE FROM categories WHERE id = ${req.params.id} RETURNING *`);
        res.status(200).json({
            status:'success',
            message:'delete categories',
            payload:deletePost
        })
    } catch (error) {
        res.status(400).json({
            status: error,
            message: "didn't delete categories"
        })
    }
}

module.exports = {createCategories,deleteCategories,pullStoreByType, pullStoresById}