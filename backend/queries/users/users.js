const db = require ("../../db/index")

const pullUserById = async (req,res,next)=>{
    try{
        let usernameByID = await db.one('SELECT * FROM users WHERE id= $1', [req.params.id])
        res.status(200).json({
            status: 'success',
            message: 'retrieves username by ID',
            payload: usernameByID
        })
    }catch(error){
        res.status(400).json({
            status: error,
            message: 'could not retrieve username by ID'
        })
    }
}

const pullUserByUsername = async (req,res,next)=>{
    try{
        let user = await db.one('SELECT id, username FROM users WHERE username = ${username} AND password= ${password}', req.body)
        res.status(200).json({
            status: 'success',
            payload: user,
            message: 'retrieves id and username search'
        })

    }catch(error){
        res.status(400).json({
            status: error,
            message: 'could not retrieve user'
        })
    }
}

const pullUserByEmail = async (req,res,next)=>{
    try{
        let allUser = await db.any(`SELECT * FROM users WHERE email = ${req.params.email}`)
        res.status(200).json({
            status: 'success',
            message: 'retrieves all username include email',
            payload: allUser
        })
    }catch(error){
        res.status(400).json({
            status: error,
            message: 'could not retrieve username that include email'
        })
    }
}

const createUser = async (req, res, next)=>{
    try {
        await db.none('INSERT INTO users (username, email, password) VALUES(${username}, ${email}, ${password})', req.body)
        res.status(200).json({
            status:'success',
            message:'create new user account',
            payload:req.body
        })
    } catch (error) {
        res.status(400).json({
            status: error,
            message: "didn't create new user account"
        })
    }
}
const deleteUser = async (req, res, next)=>{
    try {
        let deleteLike = await db.one(`DELETE FROM users WHERE username = $1 RETURNING *`,req.body.username);
        res.status(200).json({
            status:'success',
            message:'delete user account',
            payload:deleteLike
        })
    } catch (error) {
        res.status(400).json({
            status: error,
            message: "didn't delete user account"
        })
    }
}

module.exports = {createUser,deleteUser,pullUserByUsername, pullUserByEmail, pullUserById}