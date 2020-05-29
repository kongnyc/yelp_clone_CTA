const db = require ("../../db/index")

const pullStoresById = async (req,res,next)=>{
    try{
        let storeByID = await db.one(`SELECT * FROM stores WHERE id =${req.params.id}`)
        res.status(200).json({
            status: 'success',
            message: 'retrieves store by ID',
            payload: storeByID
        })
    }catch(error){
        res.status(400).json({
            status: error,
            message: 'could not retrieve store by ID'
        })
    }
}

const pullStoresByName = async (req,res,next)=>{
    try{
        let allStore = await db.any(`SELECT * FROM stores WHERE name LIKE '%${req.params.name}%'`)
        res.status(200).json({
            status: 'success',
            message: 'retrieves all Store include search',
            payload: allStore
        })
    }catch(error){
        res.status(400).json({
            status: error,
            message: 'could not retrieve store that include search'
        })
    }
}

const pullStoresByAddress = async (req,res,next)=>{
    try{
        let allStore = await db.any(`SELECT * FROM stores WHERE address LIKE '%${req.params.address}%'`)
        res.status(200).json({
            status: 'success',
            message: 'retrieves all Store include address',
            payload: allStore
        })
    }catch(error){
        res.status(400).json({
            status: error,
            message: 'could not retrieve store that include address'
        })
    }
}

const createYelpStore = async (req, res, next)=>{
    // res.json("hello")
    try {
        await db.none('INSERT INTO Stores(name, address) VALUES(${name}, ${address})', req.body)
        res.status(200).json({
            status:'success',
            message:'create new store account',
            payload:req.body
        })
    } catch (error) {
        res.status(400).json({
            status: error,
            message: "didn't create new store account"
        })
    }
}
const deleteYelpStore = async (req, res, next)=>{
    // res.json("hello")
    try {
        // await db.one(`DELETE FROM Stores WHERE name = ${req.body.name} RETURNING *`)
        let deleteLike = await db.one(`DELETE FROM Stores WHERE name = $1 RETURNING *`,req.body.name);
        res.status(200).json({
            status:'success',
            message:'delete store account',
            payload:deleteLike
        })
    } catch (error) {
        res.status(400).json({
            status: error,
            message: "didn't delete store account"
        })
    }
}

module.exports = { createYelpStore, deleteYelpStore, pullStoresByName,pullStoresByAddress, pullStoresById}