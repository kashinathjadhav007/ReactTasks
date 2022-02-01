import { useState } from "react";

export default function useCount()
{
    const[count,setCount]=useState(0);
    const handleIncrement=()=>
    {
        setCount(count+1);
    }

    return{count,handleIncrement};

}



