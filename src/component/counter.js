import react from "react";
class Counter extends react.Component
{

    constructor()
    {
        super()
        this.state={
            count:0

        }

    }
    incrementFun()

    {
        this.setState({count:this.state.count+1})
        
        
    }
    decrementFun()

    {
        this.setState({count:this.state.count-1})
        
        
    }
    resetFun()

    {
        this.setState({count:0})
        
    }

    render()
    {
        return(
            <>
            <span>{this.state.count}</span>
            <br></br>
            <button onClick={()=>this.incrementFun()}>Add</button>
            <button onClick={()=>this.decrementFun()}>substract</button>
            <button onClick={()=>this.resetFun()}>Reset</button></>
        )
    }
}

export default Counter;