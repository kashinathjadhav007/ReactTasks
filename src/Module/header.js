import {Nav,UL} from "../component/style"
const Header=()=>
{
    const removeToken=()=>{
        localStorage.removeItem("token")
    }
    return(
        
            <div>
            <Nav>
               <UL>
                   <li><a href="http://localhost:3000/contact">Contact</a></li>
                   <li><a href="http://localhost:3000">DashBoard</a></li>
                   <li><a href="http://localhost:3000/about">About US</a></li>
                   <li><a href="http://localhost:3000/button">Button Varients</a></li>
                   <li><a href="http://localhost:3000/counter">Counter</a></li>
                   <li><a href="http://localhost:3000/login">Login</a></li>
                   <li><a href="http://localhost:3000/autocounter">AutoCounter</a></li>
                   <li><a href="http://localhost:3000/Muimodel">MUI Model</a></li>
                   <li><a href="http://localhost:3000/register">MUI Login</a></li>
                   <li><a href="" onClick={removeToken}>Logout</a></li>
                   
               </UL>
            </Nav>
           </div>
    );
}

export default Header;