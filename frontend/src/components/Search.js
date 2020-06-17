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
        // debugger
        setAddress(res.data.results[0].address_components[2].long_name + ", " + res.data.results[0].address_components[5].long_name + " " + res.data.results[0].address_components[7].long_name)
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