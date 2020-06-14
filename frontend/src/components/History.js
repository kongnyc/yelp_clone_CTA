import React from 'react'

const History =({history})=> {

   const displayComment= history.map(list=>{
    //    debugger
        return (<div className="review" key={list.id} id={list.id}> <h4>User: {list.username}</h4><p>Post: {list.content}</p><p>posted at: {list.time_stamp}</p> </div>)
    }).reverse()
        return ( 
            <>
                 {displayComment}
            </>
        )
    }

export default History