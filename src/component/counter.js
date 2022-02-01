import react from "react";
class Counter extends react.Component
{
    constructor()
    {
        super()
        this.state={
            count:0,
            count1:10
           }
}
incrementFun()
{
        this.setState({count:this.state.count+1})
        }
    decrementFun(){
        this.setState({count:this.state.count-1})
        }
    resetFun(){
        this.setState({count:0})
        }
   componentDidMount(){
        this.interval = setInterval(() => this.setState({ count1: this.state.count1+1 }), 1000);
    }
    render()
    {
        return(
            <>
            <span>{this.state.count}</span>
            <br></br>
            <button onClick={()=>this.incrementFun()}>Add</button>
            <button onClick={()=>this.decrementFun()}>substract</button>
            <button onClick={()=>this.resetFun()}>Reset</button>
            <br></br>
            <span>{this.state.count1}</span>
             </>
        )
    }
}

export default Counter;