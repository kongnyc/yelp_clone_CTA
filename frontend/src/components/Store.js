import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import axios from "axios";
import Display from "./Display"
import {getAPI} from "../util/util"
import {useHistory} from "react-router-dom"


const Store =()=> {
    const API = getAPI();
    const history = useHistory()
    let { store_id } = useParams();
    const [store, setStore]=useState([])
    const [category, setCategory]=useState([])

const fetchData = async(url, setData)=>{
    try {
        let res= await axios.get(url)
        setData(res.data.payload)
    } catch (error) {
        console.log(error)
    }
}


useEffect(()=>{
        fetchData(`${API}/api/yelp/store/${store_id}`, setStore)
        fetchData(`${API}/api/yelp/category/${store_id}`, setCategory)
}, [])
const handleLogOut=()=>{
    history.replace=(null, "/")
    setStore([])
    setCategory([])
    sessionStorage.removeItem("searchTerm")
}
        return (
            <div className="backDiv">
             <button className="homeBtn" onClick={handleLogOut}><a className="span" href="/">Back to Home</a></button>
             <button className="homeBtn"><a className="span" href="/results">Back to Results</a></button>
            <h1>Store Info</h1>
                <Display store={store} category={category}/>
            </div>
        )
    }


export default Store
