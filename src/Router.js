import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AboutUs,DashBoard,FormDialog,Register,LoginPage,Form,Login,Contact} from "./Page/";
import Autocounter from "./Page/autocounter";
import { Button } from "./component";
import { Counter } from "./component";
import WelcomePage from "./Page/welcomePage"
import { PrivateRoute } from "./Route/privateRoute";
const Router=(prop)=>{
    return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<AboutUs myData={prop.text}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/button" element={<Button ButtonText="My Butt"/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/autocounter" element={<Autocounter/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/Muimodel" element={<FormDialog/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/loginpage" element={<LoginPage/>}/>
          <Route path="/welcome" element={ <PrivateRoute><WelcomePage/></PrivateRoute>}/>
          </Routes>
        </BrowserRouter>)
}
export default Router;