import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AboutUs,DashBoard } from "./Page/index";
import Login from "./Page/login"
import Form from "./Page/form";
import Autocounter from "./Page/autocounter";
import { Header} from "./component/style";
import { Counter } from "./component";
import FormDialog from "./Page/formDialogue";

const Router=(prop)=>{
    return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard/>}/>
          <Route path="/about" element={<AboutUs myData={prop.text}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/autocounter" element={<Autocounter/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/Muimodel" element={<FormDialog/>}/>
        </Routes>
        </BrowserRouter>)
}
export default Router;