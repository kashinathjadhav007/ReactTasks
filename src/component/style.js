import styled,{StyledComponent} from "styled-components";

export let Header=styled.header
`
background-color:#616e83;
height:200px;
display:flex;
 

`


export let Left=styled.image 
`position: absolute;
top: 50px;
left: 140px;
border: 1px solid white;

padding-top: 20px;
padding-right: 20px;

`


export let Right=styled.text
`
margin-left:400px;
padding-top:30px;
`

export let Second=styled.text
`
display:flex;
padding-top:200px;
justify-content:space-between;
`

export let Left1=styled.ul
` padding-right:20px;`

export let Right1=styled.p
`padding-left:20px;`


export const Nav=styled.nav
`background-color:light-red;
color:white;
height:30px;`

export const UL=styled.ul
`display:flex;
justify-content:space-between`


export const MyButton = styled.button`background-color: ${(props)=>props.color};
color:white`
 
