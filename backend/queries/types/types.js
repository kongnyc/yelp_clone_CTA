// SELECT name FROM categories LEFT JOIN types ON type_id = types.id WHERE store_id = 1

const db = require ("../../db/index")

const pullTypeById = async (req,res,next)=>{
    try{
        let typeById = await db.one('SELECT * FROM types WHERE id= $1', [req.params.id])
        res.status(200).json({
            status: 'success',
            message: 'retrieves type by ID',
            payload: typeById
        })
    }catch(error){
        res.status(400).json({
            status: error,
            message: 'could not retrieve type by ID'
        })
    }
}

const pullTypeByName = async (req,res,next)=>{
    try{
        let user = await db.one(`SELECT * FROM types WHERE name = '${req.params.name}'`)
        res.status(200).json({
            status: 'success',
            message: 'retrieves type by name',
            payload: user
        })
    }catch(error){
        res.status(400).json({
            status: error,
            message: 'could not retrieve type name'
        })
    }
}

const createType = async (req, res, next)=>{
    try {
        await db.none('INSERT INTO types (name) VALUES($1)', req.body.name)
        res.status(200).json({
            status:'success',
            message:'create new type',
            payload:req.body.name
        })
    } catch (error) {
        res.status(400).json({
            status: error,
            message: "didn't create new type"
        })
    }
}

const deleteType = async (req, res, next)=>{
    try {
        let deleteType = await db.one(`DELETE FROM types WHERE name = $1 RETURNING *`,req.body.name);
        res.status(200).json({
            status:'success',
            message:'delete type',
            payload:deleteType
        })
    } catch (error) {
        res.status(400).json({
            status: error,
            message: "didn't delete type"
        })
    }
}

module.exports = {createType, deleteType, pullTypeByName, pullTypeById}