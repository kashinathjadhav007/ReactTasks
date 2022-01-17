import { MyButton} from "../component/style";
const Button=(prop)=>
{
    return(<div>
        <MyButton color="red">{prop.ButtonText}</MyButton>
        <br></br>
        <MyButton color="yellow">{prop.ButtonText}</MyButton>
        <br></br>
        <MyButton color="blue">{prop.ButtonText}</MyButton>
        <br></br>
        <MyButton color="purple">{prop.ButtonText}</MyButton>
        <br></br>
        </div>)
    }
export default Button;