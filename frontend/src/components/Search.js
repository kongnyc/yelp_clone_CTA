import React,{useEffect,useState} from "react";
import axios from "axios"
import API_KEY from "../secrets"
import {useInput} from "../util/useInput"
import {useHistory} from "react-router-dom"


const Search = () => {

    const [defaultAddress, setAddress] = useState("null")
    let searchObj = useInput("")
    let nearLocationObj = useInput("")
    const history = useHistory()

const location = () =>{

    navigator.geolocation.getCurrentPosition(async function (position) {
        let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${API_KEY}`)
        setAddress(res.data.results[7].formatted_address)
      });
}


const handleSearch=(e)=>{
  e.preventDefault() 
  sessionStorage.searchTerm=e.target.elements[0].value
  if(e.target.elements.nearLocation.value.length>1){
      sessionStorage.address=e.target.elements.nearLocation.value
  }else{
      sessionStorage.address=defaultAddress
  }
  history.push("/results")
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
      <button>Search</button>
  </form>

  ) 
};

export default Search;