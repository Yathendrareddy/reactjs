import React from 'react'
class SetState extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"Anil",
            age:21
        }
    }
    ChangeColor=()=>{
        this.setState({color:"Red",name:"Yathendra"})
    }
    render(){
        return(
            <div>
                <h1>My name is {this.state.name}.My age is {this.state.age}. And I love color {this.state.color} </h1>
                <button type="button" onClick={this.ChangeColor}>Click Me!!!</button>
            </div>
        )
    }
}

export default SetState