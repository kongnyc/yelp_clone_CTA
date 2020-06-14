import React from 'react'
import {useHistory} from "react-router-dom"


const List =({name,address,store_id})=> {
    const history = useHistory()


const handleClick =()=>{
    history.push(`/store/${store_id}`)
        // window.location=`http://localhost:3000/store/${store_id}`
    }

    return (
           
            <div className="store" storeID={store_id}>
            <p className="store_name" onClick={(e)=>handleClick(store_id)}>{name}</p>
            <p className="address" onClick={(e)=>handleClick(store_id)}>{address}</p>
            </div>
            
        )
 
    }



export default List;