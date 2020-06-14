import React from "react";
import { NavLink } from "react-router-dom";
import { useInput } from "../util/useInput";
import axios from "axios"
import {getAPI} from "../util/util"


const Business = () => {
        const API = getAPI();
        const name = useInput("");
        const address = useInput("");
      
      const handleNewStore= async()=>{
    
        let newStore = await axios.post(`${API}/api/yelp/store}`, {
          name: name.value,
          address: address.value
        });
        debugger
      }
        
          return(
              <div className="signUp">
                  <nav>
                      <NavLink className="home" exact to={"/"}>Home</NavLink>
                  </nav>
                  <div className="mainPage">
                      <h3>Business Sign Up</h3>
                      <form className="signUpForm" onSubmit={handleNewStore} >
                            <label>Business Name: </label>
                              <input type="text" placeholder="name" {...name} />
    
                            <label>Address: </label>
                              <input type="address" placeholder="address" {...address} />
    
                          <button type="submit"><span>Create Store</span></button>
                      </form>
                  </div>
              </div>
          )
      }

export default Business
