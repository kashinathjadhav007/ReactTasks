import React from "react";
export const UseTheme ={
    theme1:{
        background:'purple',
        color:'black'
    
},
theme2:{
    background:'yellow',
    color:'black'

},
theme3:{
        background:'orange',
        color:'black'
    
}
}
const ThemeContext = React.createContext(UseTheme);
export default ThemeContext