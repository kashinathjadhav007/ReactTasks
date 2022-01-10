import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AboutUs,DashBoard } from "./Page/index";



const Router=(prop)=>{
    return(
    
      
        <BrowserRouter>
        <Routes>
            <Route   path="" element={<DashBoard/>}/>
            

        </Routes>
        <Routes>
           
            <Route  path="/about" element={<AboutUs myData={prop.text}/>}/>

        </Routes>
        </BrowserRouter>
    
)

}

export default Router;