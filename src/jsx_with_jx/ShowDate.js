import React from "react"
function ShowDate(){
    const date = new Date()
    return(
        <div>
            <h1>The time is {date.getHours()}  : {date.getMinutes()} : {date.getSeconds()}   </h1>
        </div>
    )
}


export default ShowDate