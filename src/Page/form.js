import { useLocation } from "react-router";
const Form = () =>{
    const location = useLocation();
    let Data = location.state;
    return(
        <>
        <h1>{Data.users.name} </h1>
        <h1>{Data.users.email} </h1>
        </>)}
export default Form