import {Button,Counter} from "../component/index"
import { Header } from "../Module/index";
const Dashboard=()=>
{
    return(<div>
                <h1>welcome to dashboard</h1>
                <br></br>
                <Header></Header>
                <br></br>
                <Button ButtonText="My Button" ButtonClass="varient"/>
                <Button ButtonText="My Primary" ButtonClass="varient"/>
                <Button ButtonText="My Secondary" ButtonClass="varient"/>
                <Button ButtonText="My ternary" ButtonClass="varient"/>

                <br></br>
                
                <Counter/>
               
    </div>)
    
}

export default Dashboard;