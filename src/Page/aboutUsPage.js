
import { Header,Left,Right,Second,Left1} from "../component/style";

const aboutUsPage=(prop)=>
{
    return (
        <div>
          <Header>
          <Left><img src={prop.myData.image}/>
          <p>{prop.myData.author}</p></Left>

              <Right>
              <h1>{prop.myData.right_h1}</h1>
               <h6>{prop.myData.right_h2}</h6>
               <h6 >{prop.myData.right_h3}</h6>
               <h6>{prop.myData.right_h4}</h6>
               <h1>{prop.myData.right_h5}</h1>
               <h5>{prop.myData.right_h6}</h5>
               <h4>{prop.myData.right_h7}</h4>
              </Right>
         
          </Header>
          
          
                </div>
        
      );
}

export default aboutUsPage;

