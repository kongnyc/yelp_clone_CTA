import React, { Component } from 'react'
import Comment from "./Comment"

const Display =({category,store})=> {

    const nameDisplay = ()=>{
        return (
            <div className="store">
           <h3 className="Name">Store Name:</h3> <span>{store.name}</span>
           <h3 className="Name">Store Address:</h3> <span>{store.address}</span>
            </div>
        )
    }
    const detailDisplay = ()=>{
        if(category){
            return Object.keys(category).map((item,index)=>{
                return (
                    <li key={index}>
                        {category[item].name}
                    </li>
                )
            })
        }
    }

        return (
            <div>
                {nameDisplay()}
                <br></br>
                {detailDisplay()}
                <Comment id={store.id}/>
            </div>
        )
    }


export default Display
