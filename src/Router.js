import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AboutUs,DashBoard } from "./Page/index";
import { Header } from "./Module/index";


const Router=(prop)=>{
    return(
    
      
        <BrowserRouter>
        <Routes>
            <Route   path="" element={<DashBoard/>}/>
            

        </Routes>
        <Routes>
            
            <Route   path="" element={<Header/>}/>
            
        </Routes>
        <Routes>
           
            <Route  path="/about" element={<AboutUs myData={prop.data}/>}/>

        </Routes>
        </BrowserRouter>
    
)

}

export default Router;