import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import axios from "axios";
import Display from "./Display"
import {getAPI} from "../util/util"

const Store =()=> {
    const API = getAPI();
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
// console.log(category)
// console.log(store)

useEffect(()=>{
        fetchData(`${API}/api/yelp/store/${store_id}`, setStore)
        fetchData(`${API}/api/yelp/category/${store_id}`, setCategory)
}, [])

        return (
            <div>
             <button className="homeBTN"><a href="/">Back to Home</a></button>
             <button className="resultBTN"><a href="/results">Back Results</a></button>
            <h1>store info</h1>
                <Display store={store} category={category}/>
            </div>
        )
    }


export default Store
