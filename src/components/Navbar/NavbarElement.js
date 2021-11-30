import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaPizzaSlice} from 'react-icons/fa'

export const Nav = styled.nav`
top:0px;
padding-top:0px;
background:red;
height:80px;
display:flex;
justify-content:center;
font-weight:700;
`;

export const NavLink = styled(Link)`
color:#fff;
font-size:2rem;
display:flex;
aligin-items:center;
text-decoration:none;
cursor:pointer;


@media screen and (max-width:400px){
position:absolute;
top:10px;
left:25px;
}
`
export const  NavIcon = styled.div`
display:block;
position:absolute;
top:0px;
left:40px;
cursor:pointer;
color:#fff;
p{
// transform:translate(100%,100%);
font-weight:bold;
font-size:2rem;
}
`
export const Bars = styled(FaPizzaSlice)`
font-size:45px;
position:absolute;
top:25px;
right:  -200px;
// transform:translate(-50%,-15%)
`