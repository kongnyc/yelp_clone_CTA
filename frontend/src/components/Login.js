import React from 'react';
import axios from 'axios'
import { NavLink } from "react-router-dom";
import { useInput } from '../util/useInput';
import {useHistory} from "react-router-dom"
import {getAPI} from "../util/util"
import Toast from "light-toast"



const Login =()=> {
    const API = getAPI();
    const history = useHistory();

    let userObj = useInput("");
    let passwordObj = useInput("");

    const handleVerification = async (e) => {
        e.preventDefault();
        e.persist();
        try {
            let res = await axios.get(`${API}/api/yelp/user/name/${e.target.username.value}`);
            if(e.target.username.value === res.data.payload.username && e.target.password.value === res.data.payload.password) {
                sessionStorage.userLogin=(res.data.payload.id);
                sessionStorage.userName=(res.data.payload.username)
                Toast.info(`Welcome user ${sessionStorage.userName} back`,2000,()=>{
                    history.push('/')
                  })
            }  
        } catch (error) {
            Toast.info(`Credentials not entered or you don't exist. Please head over to our sign up page.`,2000,()=>{
            
              })
        }
    }

    return(
        <div>
             <nav>
                  <NavLink className="homeBtn" exact to={"/"}><span className="span" href="/">Home</span></NavLink>
              </nav>
              <form style={{textAlign:"center"}} className="loginForm" onSubmit={handleVerification}>
                    <h3>User Login Page</h3>
                    <label>Username: </label>
                    <input placeholder="username" name="username" {...userObj} required/>
                    <label>Password: </label>
                     <input type="password" placeholder="password" name="password"  minLength="8" {...passwordObj} required />
                    <button type="Submit">Login</button> 
                </form>
        </div>

    )
   }
export default Login;