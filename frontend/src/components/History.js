import React from 'react'

const History =({history})=> {

   const displayComment= history.map(list=>{
        return (<div className="review" key={list.post_id}> <h4>User: {list.username}</h4><p>Post: {list.content}</p><p>posted at: {list.time}</p> </div>)
    }).reverse()
        return ( 
            <>
                 {displayComment}
            </>
        )
    }

export default History