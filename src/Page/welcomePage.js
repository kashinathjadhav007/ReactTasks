 import { useLocation } from "react-router-dom";
 import { Header } from "../Module";
 const WelcomePage=()=>
{
    const location = useLocation();
    let Data = location.state;
    return(<div>
        <h1>welcome {Data.users.mail}</h1>
        <Header/></div>)
}
export default WelcomePage;