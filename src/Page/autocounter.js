import { useEffect,useState } from "react";
const Autocounter=()=>
{
 const[counter,setCounter]=useState(0);
const SelfCounter=()=>
{
    let cnt=0;
    const interval=setInterval(()=>
    {
        if(cnt<20)
        {
            cnt=cnt+1;
        }
        else
        {
            cnt=0;
            clearInterval(interval)
        }
        setCounter(cnt);
    },1000)
}
 useEffect(()=>
    {
        SelfCounter();
    },[])
    return(
        <>
        <h1>AutoCounter: {counter}</h1>
        </>
    )
};
export default Autocounter;