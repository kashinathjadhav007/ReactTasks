import { useState } from "react";

export default function useDecCount()
{
    const[count,setCount]=useState(0);
    const handleDecrement=()=>
    {
        setCount(count-1);
    }

    return{count,handleDecrement};

}
