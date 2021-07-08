import React from 'react'
import Header from './Header'

//class component

class Main extends React.Component{
    render(){
        return(
            <div>
                <Header name={"Yathendra Reddy"} />
            </div>
        )
    }
}

// function Main(){
//     return(
//         <div>
//             <Header name={"Yathendra"} />
//         </div>
//     )
// }

export default Main