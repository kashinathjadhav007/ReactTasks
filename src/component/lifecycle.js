
import react from "react";
import { Component } from "react/cjs/react.development";

class LifeCycle extends react.Component
{
    constructor()
    {
        super();
        this.state={name:"My name is Kashi"}
        console.log("constructor is called")
    }
    
    componentWillMount()
    {
        console.log("component will mount called") 
    }
    componentDidMount()
    {
        console.log("component did mount called")
    }
    render()
    {
        console.log("rendor method called")
        return(
            
                <h1>Hello render</h1>
            )
    }
}
export default LifeCycle;