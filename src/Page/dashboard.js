import {Button,Counter} from "../component/index"

const Dashboard=()=>
{
    return(<div>
                <h1>welcome to dashboard</h1>
                <Button ButtonText="My Button" ButtonClass="varient"/>
                <Button ButtonText="My Primary" ButtonClass="varient"/>
                <Button ButtonText="My Secondary" ButtonClass="varient"/>
                <Button ButtonText="My ternary" ButtonClass="varient"/>
                <Counter/>
    </div>)
    
}

export default Dashboard;