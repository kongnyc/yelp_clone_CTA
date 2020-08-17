import React,{useEffect, useState} from "react";
import axios from "axios"
import List from "./List"
import {getAPI} from "../util/util"


const Result = () => {
  
const API = getAPI();
const [list, setList] = useState([])

const fetchData = async(url)=>{
  // console.log(url)
try {
  let res= await axios.get(url)
    setList(prevState=>[...prevState, ...res.data.payload])
} catch (error) {
    setList([])
    console.log(error)
  }
}



const ShowResultList =()=>{
  if(list.length>0){
    // debugger
    return list.map((list)=>{
      return(<List key={list.id} store_id={list.id} name={list.name} address={list.address}/>)
    })
  }else{
    return <p>can't find anything, please go back.</p>
  }
}


useEffect(()=>{
  fetchData(`${API}/api/yelp/store/name/${sessionStorage.searchTerm}`)
}, [])
    
const handleLogOut=()=>{
  sessionStorage.removeItem("searchTerm")
  // sessionStorage.removeItem("address")
}
  return (
  <div>
  <button className="homeBtn" onClick={handleLogOut} ><a className="span" href="/">Back</a></button>
  <h1>Result page</h1>
  <p>
    Search for: {sessionStorage.searchTerm.toLowerCase()} Near: {sessionStorage.address}
  </p>

    <div className="result">
        <h3 style={{'font-weight':"900"}}>List Below</h3>
        {ShowResultList()}
    </div>

  </div>);
};

export default Result;