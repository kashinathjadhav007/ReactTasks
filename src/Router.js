import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AboutUs,DashBoard } from "./Page/index";
import Login from "./Page/login"
import Form from "./Page/form";
const Router=(prop)=>{
    return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard/>}/>
          <Route path="/about" element={<AboutUs myData={prop.text}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Form/>}/>
        </Routes>
        </BrowserRouter>
    
)

}

export default Router;