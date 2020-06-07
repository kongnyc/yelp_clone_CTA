import React, { Component } from 'react'
import "../css/Header.css"

const Header =()=> {


  // if(sessionStorage.login){

  // }

        return (
            <div className="header">

              <img src="https://images.squarespace-cdn.com/content/v1/5b2424ad266c07b94eab58ee/1536675878312-M9F797DGCA2DWEIOL248/ke17ZwdGBToddI8pDm48kHyVHa5xa_3FTr0ohEyBrNVZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7TNdqww6z_61iXx7yO_mnkqr9QvTuVKJiB1R_XE5p9s9p_nV8m35JPLFe4dXvYPk4A/yelp+logo.png" alt="logo"></img>
    
                <ul className="box">
                  <li className="login"><a href="/login/">Log In</a></li>
                  <li className="login"><a href="/signup/">User Sign Up</a></li>
                  <li className="businessLogin"><a href="/business/">Business Sign Up</a></li>
                </ul>
            </div>
        )
    }


export default Header
