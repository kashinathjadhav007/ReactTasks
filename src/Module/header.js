import {Nav,UL} from "../component/style"
const Header=()=>
{
    return(
            <div>
            <Nav>
               <UL>
                   <li><a href="http://localhost:3000">Contact</a></li>
                   <li><a href="http://localhost:3000">DashBoard</a></li>
                   <li><a href="http://localhost:3000/about">About US</a></li>
                   <li><a href="http://localhost:3000/counter">Counter</a></li>
                   <li><a href="http://localhost:3000/login">Login</a></li>
                   <li><a href="http://localhost:3000/autocounter">AutoCounter</a></li>
                   <li><a href="http://localhost:3000/Muimodel">MUI Model</a></li>
               </UL>
            </Nav>
           </div>
    );
}

export default Header;