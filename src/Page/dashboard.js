import {Button,Counter} from "../component/index"
import { Header } from "../Module/index";
const Dashboard=()=>
{
    return(<div>
                <h1>welcome to dashboard</h1>
                <br></br>
                <Header></Header>
                <br></br>
                <Button ButtonText="My Button"/>

                <br></br>
                
                <Counter/>
               
    </div>)
    
}

export default Dashboard;