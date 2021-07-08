import React from 'react'
function ShowTime(){
    const date = new Date()
    const hours = date.getHours()
    var message=""
    if(hours<12){
        message="Morning"
    }
    if(hours>=12 && hours <17){
        message="Evening"
    }
    else{
        message="Night"
    }
    return(
        <div>
            <h1>Good {message} </h1>
            <h1>The time now is {date.getHours()} : {date.getMinutes()} : {date.getSeconds()}</h1>
        </div>
    )
}

export default ShowTime