import React,{useEffect} from "react";
import axios from "axios"
import API_KEY from "../secrets"

console.log(require('dotenv').config())
console.log(process.env)

const Search = () => {

const location =async ()=>{
    navigator.geolocation.getCurrentPosition(async function (position) {
        console.log(process.env)
        // console.log(process.env.REACT_APP_GOOGLE_API_KEY)
        let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${API_KEY}`)
      });
    }

    useEffect(()=>{
        location()
        
    }, [])

    let address = null
  return ( 
  <form>
    <label>Find</label>
      <input type="text" placeholder="search for store, takeout, business"/>
    <label>Near</label>
      <input type="text" placeholder={address}/>
      <button>...</button>
  </form>

  ) 
};

export default Search;