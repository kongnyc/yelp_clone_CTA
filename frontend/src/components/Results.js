import React,{useEffect, useState} from "react";
import axios from "axios"
import List from "./List"
import {getAPI} from "../util/util"


const Result = () => {
  
const API = getAPI();
const [list, setList] = useState([])

const fetchData = async(url)=>{
  console.log(url)
  try {
    let res= await axios.get(url)
    // debugger
    // res.data.payload.map((el)=>{
            // setList(prevState=>[...prevState,{id:el.id, name:el.name, address:el.address}])
            setList(prevState=>[...prevState, ...res.data.payload])
        // })
    } catch (error) {
        console.log(error)
    }
}
const ShowResultList =list.map((list)=>{
   
    return(<List key={list.id} store_id={list.id} name={list.name} address={list.address}/>)
 })

    useEffect(()=>{
      console.log(sessionStorage)

        fetchData(`${API}/api/yelp/store/name/${sessionStorage.searchTerm}`)
    }, [])
    
const handleLogOut=()=>{
        console.log("log out")
        sessionStorage.removeItem("searchTerm")
        sessionStorage.removeItem("address")
}
    //change a href into link
  return (
  <div>
  <button className="home" onClick={handleLogOut} ><a href="/">Back to Home</a></button>
  <h1>Result page</h1>
  <p>
    search for : {sessionStorage.searchTerm} near: {sessionStorage.address}
  </p>

    <div className="result">
        <h1>List Below</h1>
        {ShowResultList}
    </div>

  </div>);
};

export default Result;