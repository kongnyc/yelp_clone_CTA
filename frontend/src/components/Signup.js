import React from "react";
import { NavLink } from "react-router-dom";
import { useInput } from "../util/useInput";
import axios from "axios"
import {getAPI} from "../util/util"


const SignUp = () => {
    const API = getAPI();

    const username = useInput("");
    const email = useInput("");
    const password = useInput("");
  
  const handleNewUser= async()=>{

    let newUser = await axios.post(`${API}/api/yelp/user}`, {
      username: username.value,
      password: password.value,
      email: email.value
    });
    
    if(newUser.data.status==="success"){
      sessionStorage.userLogin=(newUser.data.payload.id);
      sessionStorage.userName=(newUser.data.payload.username)

    }else{

        alert(newUser.data.status)
    }
  }
    
      return(
          <div className="signUp">
              <nav>
                  <NavLink className="home" exact to={"/"}>Back Home</NavLink>
              </nav>
              <div className="mainPage" style={{textAlign:"center"}}>
                  <h3>Sign Up</h3>
                  <form className="signUpForm" onSubmit={handleNewUser} >
                        <label>Username: </label>
                          <input type="text" placeholder="Username" {...username} />

                        <label>Email: </label>
                          <input type="email" placeholder="Email Address" {...email} />

                        <label>Password: </label>
                        <input type="password" placeholder="Password" {...password} />

                      <button type="submit"><span>Create Account</span></button>
                  </form>
              </div>
          </div>
      )
  }
  
  
  
  export default SignUp;
  
