import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import axios from "axios";
import Display from "./Display"


const Store =()=> {
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
console.log(category)
console.log(store)

useEffect(()=>{
        fetchData(`http://localhost:3001/api/yelp/store/${store_id}`, setStore)
        fetchData(`http://localhost:3001/api/yelp/category/${store_id}`, setCategory)
}, [])

        return (
            <div>
             <button className="login"><a href="/">Back to Home</a></button>
            <h1>store info</h1>
                <Display store={store} category={category}/>
            </div>
        )
    }


export default Store
