import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import History from "./History"
import axios from "axios"
import {useInput} from "../util/useInput"
import {getAPI} from "../util/util"
import {useHistory} from "react-router-dom"


const Comment =()=> {

    const API = getAPI();
    const history = useHistory()
    let { store_id } = useParams();
    let userObj = useInput("")
    let passwordObj = useInput("")

    let [user_id, setId]=useState(sessionStorage.userLogin) //user_id
    let contentObj = useInput("")
    const [list, setList]=useState([])

const fetchData = async(url)=>{
    try {
        let res= await axios.get(url)
        // debugger
        // res.data.payload.map((el)=>{
                setList(prevState=>[...prevState, ...res.data.payload])
            // })
        } catch (error) {
            console.log(error)
        }
}
    
const addPost= async(e)=>{
        e.preventDefault()
        e.persist()
        let body = {user_id: user_id, store_id: store_id, content: contentObj.value }
        // debugger
        await axios.post(`${API}/api/yelp/post/`, body)
    }

useEffect(()=>{
        fetchData(`${API}/api/yelp/post/${store_id}`)
    }, [])

const handleLogin= async(e)=>{
        e.preventDefault();
        e.persist();
        let res = await axios.get(`http://localhost:3001/api/yelp/user/name/${e.target.username.value}`);
        if(e.target.username.value === res.data.payload.username && e.target.password.value === res.data.payload.password) {
            sessionStorage.userLogin=(res.data.payload.id)
            sessionStorage.userName=(res.data.payload.username)
            setId(res.data.payload.id)
        }  
        else {
            return (alert("Credentials not entered or you don't exist. Please head over to our sign up page."))
        }
}

    const loginCheck = ()=>{
        if(user_id){
            return (
            <form className="commentForm" onSubmit={addPost}>
            <label>user logged in as {sessionStorage.userName}, </label> 
            {/* <input placeholder="Name" name="user_id" {...user_idObj} required/> */}
            <label>Comment: </label>
            <input placeholder="..." name="content" {...contentObj} required />
            <button type="Submit">Submit</button> 
            </form>
            )
        } else {
            // return (
            //     <form className="loginForm" onSubmit={handleLogin}>
            //         <label>Account: </label>
            //         <input placeholder="username" name="username" {...userObj} required/>
            //         <label>Password: </label>
            //          <input type="password" placeholder="password" name="password"  minLength="8" {...passwordObj} required />
            //         <button type="Submit">Login</button> 
            //     </form>
            // )
        }
    }

        
    console.log(user_id)
        return (
            <div className="commentSection">
            <History history={list}/>
            {loginCheck()}
            </div>
        )
    }


export default Comment