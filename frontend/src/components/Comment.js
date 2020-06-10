import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import History from "./History"
import axios from "axios"
import {getAPI} from "../util/util"

const Comment =()=> {

    const API = getAPI();
    let { store_id } = useParams();

    const [post, setPost]=useState([])
    const [list, setList]=useState([])

const fetchData = async(url)=>{
    try {
        let res= await axios.get(url)
        res.data.payload.map((el)=>{
                setList(prevState=>[...prevState,{post_id:el.id, user_id:el.user_id, username:el.username, content:el.content, time:el.time_stamp}])
            })
        } catch (error) {
            console.log(error)
        }
}
    
    const addPost=(e)=>{
        e.preventDefault()
        e.persist()
        if(!post){
            setPost({name : e.target.elements[0].value, comment:e.target.elements[1].value})
        }else{
            // setPost(history=>[...history,{name : e.target.elements[0].value, comment: e.target.elements[1].value}])
        }
    }

    useEffect(()=>{
    
        fetchData(`${API}/api/yelp/post/${store_id}`)
    }, [])
        
    console.log(list)
        return (
            <div className="commentSection">
            <History history={list}/>

            <form className="commentForm" onSubmit={addPost}>

            <div>
            <p>Name</p>
            <input placeholder="Name" required/>
            </div>
 
            <div>
            <p>Comment</p>
            <input placeholder="..." required/>
            </div>

            <div>
            <button type="Submit">Submit</button> 
            </div>

            <div className="PostedComment">
            </div>

            </form>
            
            </div>
        )
    }


export default Comment