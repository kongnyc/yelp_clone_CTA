import React from 'react';
import axios from 'axios'
import { NavLink } from "react-router-dom";
import { useInput } from '../util/useInput';
import {getAPI} from "../util/util"


const Login =()=> {
const API = getAPI();

let emailObj = useInput("")
let passwordObj = useInput("")

const handleVerification = async (e) => {
    e.preventDefault() 
    let inputEmail = emailObj.value
    let inputPassword = passwordObj.value
    let res = await axios.get(`${API}/api/yelp/user/${inputEmail}`)
    if(inputEmail === res.data.payload.email && inputPassword === res.data.payload.password) {
        sessionStorage.loginedUser=res.data.payload.id
        setTimeout(function() {
            window.location = "../homepage";
        },3000) 
    }  
    else {
        return (alert("Credentials not entered or you don't exist. Please head over to our sign up page."))
    }
 
}
    return(
        <div>
             <nav>
                  <NavLink className="home" exact to={"/"}>back to Home</NavLink>
              </nav>

            <form onSubmit={handleVerification} className="formContainer">
                <label>Account Email: </label>
                <input type="email" name={"email"} {...emailObj}   placeholder="Email Address" />
                <label>Password: </label>
                <input type="password" name={"password"} {...passwordObj} placeholder="Password" />
                <button type="submit"> Log In</button>
            </form>
        </div>

    )
   }
export default Login;