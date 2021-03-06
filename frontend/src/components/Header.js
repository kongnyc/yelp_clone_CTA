import React,{useEffect,useState} from "react";

import "../css/Header.css"
import {useHistory} from "react-router-dom"


const Header =()=> {

const history = useHistory()
const [userLogin, setLogin] = useState(sessionStorage.userLogin)

  const loginCheck = ()=>{
    if(userLogin){
        return (
        <div className="welcome">
        <label>Welcome: {sessionStorage.userName} </label> 
        <button onClick={handleLogOut}>Log Out</button>
        </div>
        )

    } else {
        return (
            <ul className="linkBtn">
                  <li className="login"><a href="/login/">Log In</a></li>
                  <li className="login2"><a href="/signup/">Sign Up</a></li>
                  <li className="businessLogin"><a href="/business/">Store Sign Up</a></li>
            </ul> 
        )
    }
}
// useEffect(()=>{
//     loginCheck()
//   }, [])

    const handleLogOut=()=>{
        history.replace=(null, "/")
        setLogin("")
        sessionStorage.removeItem("userLogin")
        sessionStorage.removeItem("userName")
    }

        return (
            <div className="header">
            {/* <img className="logo" src="https://images.squarespace-cdn.com/content/v1/5b2424ad266c07b94eab58ee/1536675878312-M9F797DGCA2DWEIOL248/ke17ZwdGBToddI8pDm48kHyVHa5xa_3FTr0ohEyBrNVZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7TNdqww6z_61iXx7yO_mnkqr9QvTuVKJiB1R_XE5p9s9p_nV8m35JPLFe4dXvYPk4A/yelp+logo.png" alt="logo"></img> */}
            {loginCheck()}
            </div>
        )
    }


export default Header
