import { MyButton} from "../component/style";
const Button=(prop)=>
{
    return(<div>
        <MyButton className={prop.ButtonClass}>{prop.ButtonText}</MyButton>
    </div>)
    
}

export default Button;