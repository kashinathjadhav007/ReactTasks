import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AboutUs,DashBoard } from "./Page/index";
import Login from "./Page/login"
import Profile from "./Page/form";
import Form from "./Page/form";
const Router=(prop)=>{
    return(
    
      
        <BrowserRouter>
        <Routes>
            <Route   path="" element={<DashBoard/>}/>
        </Routes>
        <Routes>
           
            <Route  path="/about" element={<AboutUs myData={prop.text}/>}/>

        </Routes>
        <Routes>
            <Route   path="" element={<Login/>}/>
        </Routes>
    

        <Routes>
            <Route   path="/form" element={<Form/>}/>
        </Routes>
        
       
        
        
        </BrowserRouter>
    
)

}

export default Router;