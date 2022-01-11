import {Button,Counter} from "../component/index"
import { Header } from "../Module/index";


const Dashboard=()=>
{
    return(<div>
                <h1>welcome  ssto dashboard</h1>
                <br></br>
                <Header></Header>
                <br></br>
                <Button ButtonText="My Butt"/>

                <br></br>
                
                <Counter/>
                
               
    </div>)
    
}

export default Dashboard;