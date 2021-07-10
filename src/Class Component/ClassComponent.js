import React from "react"
class ClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={name:props.name}
    }
    render(){
        return(
            <div>
               <h1> {this.props.name} </h1>
           </div>
        )
    }
}
export default ClassComponent