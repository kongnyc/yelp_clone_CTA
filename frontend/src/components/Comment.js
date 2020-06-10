import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import History from "./History"
import axios from "axios"
import {useInput} from "../util/useInput"
import {getAPI} from "../util/util"


const Comment =()=> {

    const API = getAPI();
    let { store_id } = useParams();
    let userObj = useInput("")
    let passwordObj = useInput("")

    let [user_id, setId]=useState("")
    let contentObj = useInput("")

    const [post, setPost]=useState([])
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
        let body = {user_id: user_id, store_id: store_id, content: contentObj.value, }
        await axios.post(`${API}/api/yelp/post/`, body)
    }

    useEffect(()=>{
        fetchData(`${API}/api/yelp/post/${store_id}`)
    }, [])

    const loginCheck = ()=>{
    //    debugger
        if(user_id){
            return (
            <form className="commentForm" onSubmit={addPost}>
            <label>Username</label> 
            <p>{userObj.value}</p>
            {/* <input placeholder="Name" name="user_id" {...user_idObj} required/> */}
            <label>Comment</label>
            <input placeholder="..." name="content" {...contentObj} required />
            <button type="Submit">Submit</button> 
            </form>
            )
        } else {
            return (
                <form onSubmit={handleLogin}>
                    <label>Account</label>
                    <input placeholder="Username" name="Username" {...userObj} required/>
                    <label>Password</label>
                     <input type="password" placeholder="password" name="password"  minLength="8" {...passwordObj} required />
                    <button type="Submit">Login</button> 
                </form>
            )
        }
    }

    const handleLogin =async(e)=>{
        debugger
        return  null
    }
        
    // console.log(list)
        return (
            <div className="commentSection">
            <History history={list}/>
            {loginCheck()}
            </div>
        )
    }


export default Comment