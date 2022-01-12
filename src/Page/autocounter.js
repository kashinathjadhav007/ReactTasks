import { useEffect,useState } from "react";
import { unmountComponentAtNode } from "react-dom";

const Autocounter=()=>
{
 

const [counter, setCounter] = useState(0);

  useEffect(() => 
  {
    if(counter>=20)
    {
        setCounter(0)
    }
    const interval = setInterval(() => {
     if(counter<21)
    {
        setCounter(counter + 1);
  
    }
        
    }, 1000);
    
        return () => {
            clearInterval(interval);
          };
    
    
  });

  return <h1>Count : {counter}</h1>;

};

export default Autocounter;