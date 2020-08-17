import React from "react";
import { NavLink } from "react-router-dom";
import { useInput } from "../util/useInput";
import axios from "axios"
import {getAPI} from "../util/util"
import {useHistory} from "react-router-dom"
import Toast from "light-toast"



const Business = () => {
  const history = useHistory();

        const API = getAPI();
        const name = useInput("");
        const address = useInput("");
      
      const handleNewStore= async(e)=>{
        e.preventDefault();
        
          try {
            let newStore = await axios.post(`${API}/api/yelp/store`, {
              name: name.value,
              address: address.value
            });
            // debugger
            Toast.info(`Successful create new business ${newStore.data.payload.name} at ${newStore.data.payload.address}`,2000,()=>{
              history.push(`/store/${newStore.data.payload.id}`)
            })
            
          } catch (error) {
            console.log(error)
          }
      }    
          return(
              <div className="signUp">
                  <nav>
                  <NavLink className="homeBtn" exact to={"/"}><span className="span" href="/">Home</span></NavLink>

                  </nav>
                  <div className="mainPage" style={{textAlign:"center"}}>
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
