import React from 'react'

//class component

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>Hello {this.props.name} </h1>
            </div>
        )
    }
}

// function Header(props){
//     return(
//         <div>
//             <h1>Hello {props.name} .</h1>
//         </div>
//     )
// }

export default Header