import React,{useEffect,useState} from "react";
import axios from "axios"
import API_KEY from "../secrets"
import {useInput} from "../util/useInput"

const Search = () => {
    const [defaultAddress, setAddress] = useState("null")
    let searchObj = useInput("")
    let nearLocationObj = useInput("")

const location = () =>{

    navigator.geolocation.getCurrentPosition(async function (position) {
        let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${API_KEY}`)
        setAddress(res.data.results[3].formatted_address)
      });
}


const handleSearch=(e)=>{
    e.preventDefault() 
    window.location="../results"
    sessionStorage.searchTerm=e.target.elements[0].value
    if(e.target.elements.nearLocation.value.length>1){
        sessionStorage.address=e.target.elements.nearLocation.value
    }else{
        sessionStorage.address=defaultAddress
    }
}


    useEffect(()=>{
        location()
    }, [])

   
  return ( 
  <form onSubmit={handleSearch}>
    <label>Find</label>
      <input type="text" placeholder="search for store, takeout, business" name="searchTerm" {...searchObj}/>
    <label>Near</label>
      <input type="text" placeholder={defaultAddress} name="nearLocation" {...nearLocationObj}/>
      <button>...</button>
  </form>

  ) 
};

export default Search;