import React,{useEffect, useState} from "react";
import axios from "axios"
import List from "./List"

const Result = () => {

const [list, setList] = useState([])

const fetchData = async(url)=>{
    try {
    let res= await axios.get(url)
    res.data.payload.map((el)=>{
            setList(prevState=>[...prevState,{id:el.id, name:el.name, address:el.address}])
        })
    } catch (error) {
        console.log(error)
    }
}
const ShowResultList =list.map((list)=>{
   
    return(<><List key={list.id} store_id={list.id} name={list.name} address={list.address}/></>)
 })
    useEffect(()=>{
        fetchData(`http://localhost:3001/api/yelp/store/name/${sessionStorage.searchTerm}`)
    }, [])
    
const handleLogOut=()=>{
        console.log("log out")
        sessionStorage.removeItem("searchTerm")
        sessionStorage.removeItem("address")
}
    
  return <div>
  <button className="login" onClick={handleLogOut} ><a href="/">Back to Home</a></button>
  <h1>Result page</h1>
  <p>
    search for : {sessionStorage.searchTerm} near: {sessionStorage.address}
  </p>

    <div className="result">
        <h1>List Below</h1>
        {ShowResultList}
    </div>

  </div>;
};

export default Result;