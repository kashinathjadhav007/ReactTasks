
import {Nav,UL} from "../component/style"

const Header=()=>
{
    return(

        <div>
            <Nav>
               <UL>
                   <li>Contact</li>
                   <li>Dashboard</li>
                   <li><a href="http://localhost:3000/about">About US</a></li>
               </UL>
            </Nav>
        </div>
    );
}

export default Header;