import React from "react";
import { NavLink, useHistory} from "react-router-dom";
import { useInput } from "../util/useInput";
import axios from "axios"
import {getAPI} from "../util/util"
import Toast from "light-toast"



const SignUp = () => {
    const API = getAPI();
    const history = useHistory()

    const username = useInput("");
    const email = useInput("");
    const password = useInput("");
  
  const handleNewUser= async(e)=>{
    e.preventDefault();
    try {
      let newUser = await axios.post(`${API}/api/yelp/user`, {
        username: username.value,
        password: password.value,
        email: email.value
      });
      sessionStorage.userLogin=(newUser.data.payload.id);
      sessionStorage.userName=(newUser.data.payload.username);
      Toast.info(`Create Account Status: ${newUser.data.status.toUpperCase()}, Welcome User: ${newUser.data.payload.username}.`,3000,()=>{
        history.push('/')
      })
    } catch (error) {
      alert( `error message: ${error}`)
    }
  }
    
      return(
          <div className="signUp">
              <nav>
                  <NavLink className="homeBtn" exact to={"/"}><span className="span" href="/">Home</span></NavLink>
              </nav>
              <div className="mainPage" style={{textAlign:"center"}}>
                  <h3>Sign Up</h3>
                  <form className="signUpForm" onSubmit={handleNewUser} >
                        <label>Username: </label>
                          <input type="text" placeholder="Username" {...username} required/>

                        <label>Email: </label>
                          <input type="email" placeholder="Email Address" {...email} required/>

                        <label>Password: </label>
                        <input type="password" placeholder="Password" {...password} minLength="6" required/>

                      <button type="submit"><span>Create Account</span></button>
                  </form>
              </div>
          </div>
      )
  }
  
  
  
  export default SignUp;
  
