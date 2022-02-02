import {Nav,UL} from "../component/style"
import { Link } from "react-router-dom"
const Header=()=>
{
    const removeToken=()=>{
        localStorage.removeItem("token")
    }
    return(
         <div>
            <Nav>
               <UL>
                   <li><Link to="/contact">Contact</Link></li>
                   <li><Link to="/">DashBoard</Link></li>
                   <li><Link to="/about">About US</Link></li>
                   <li><Link to="/button">Button Varients</Link></li>
                   <li><Link to="/counter">Counter</Link></li>
                   <li><Link to="/login">Login</Link></li>
                   <li><Link to="/autocounter">AutoCounter</Link></li>
                   <li><Link to="/Muimodel">MUI Model</Link></li>
                   <li><Link to="/register">MUI Login</Link></li>
                   <li><Link to="" onClick={removeToken}>Logout</Link></li>
                   
               </UL>
            </Nav>
           </div>
    );
}

export default Header;