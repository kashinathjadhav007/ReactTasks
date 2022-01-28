import {Button,Counter} from "../component/index"
import { Header } from "../Module/index";
import GetAPI from "./getAPI";
const Dashboard=()=>
{
    return(<div>
                <h1>welcome to dashboard</h1>
                <br></br>
                <Header></Header>
                <GetAPI/>
                <br></br>
                <br></br>
                </div>)
    }
    export default Dashboard;