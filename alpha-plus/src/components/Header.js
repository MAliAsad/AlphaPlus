import styled from 'styled-components';

import HomeIcon from '@material-ui/icons/Home';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import {Link,useHistory} from "react-router-dom";

import { auth,provider } from '../firebase';

import {useState,useEffect} from "react";

import {useLocation} from "react-router-dom";

import {useDispatch,useSelector} from "react-redux";

import {selectUserName,selectUserEmail,selectUserPhoto,setUserLoginDetails} from "../features/user/userSlice";


const Header = () => {
    
    const history=useHistory();
    const dispatch=useDispatch();
    const username=useSelector(selectUserName);
    const email=useSelector(selectUserEmail);
    const photo = useSelector(selectUserPhoto);
    const [login,setLogin]=useState(false);
    const location=useLocation();

    useEffect(()=>{
        if(login){
            switch(location.pathname){
                case "/info":
                    history.push("/info");
                    break;
                case "/details":
                    history.push("/details");
                    break;
                default:
                    history.push("/home");
                    break;
            }
        }else{
            history.push("/");
        }
    },[login,location.pathname]);
    
    const handleAuth=()=>{
        auth.signInWithPopup(provider).then(result=>{
            setUser(result.user);
        }).catch(err=>{
            alert(err);
        })
    }

    const setUser=(user)=>{
        dispatch(setUserLoginDetails({
            name:user.displayName,
            email:user.email,
            photo:user.photoURL
        }))
        if(login){
            setLogin(false);
            setLogin(true);
        }else{
            setLogin(true);
        }
    }
    const signout=()=>{
        dispatch(setUserLoginDetails({
            name:"",
            email:"",
            photo:""
        }))
        setLogin(false);
    }
    

    return (
        <Nav>
                <Logo>
                    <img src="/images/AlphaPlus-logo.png" alt="Alpha+" />
                </Logo>
            {
                login?(<><NavMenu>
                <Link to="/home" >
                    <HomeIcon/>
                    <span>Home</span>
                </Link>
                <Link to="/info" >
                    <PermIdentityIcon/>
                    <span>UserInfo</span>
                </Link>
            </NavMenu>
            <SignOut>
                <UserImg src={photo} alt="" />
                <DropDown>
                   <span onClick={signout}> SignOut</span>
                </DropDown>
            </SignOut>
            </>
            ):<Login onClick={handleAuth}>Login</Login>
            }
                
        </Nav>
    )
}

const Nav=styled.nav`
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:75px;
    background-color: rgb(36, 80, 80);
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 30px;
    letter-spacing:16px;
    z-index:3;
    border-bottom:3px solid rgba(0,0,0,0.6);
`;

const Logo=styled.a`
    padding:0;
    width:80px;
    margin-top:4px;
    max-height:65px;
    font-size:0;
    display:inline-block;
    opacity:1;
    img{
        display:block;
        height:55px;
    }
    
    @media (max-width:768px){
        opacity:0;
    }
`;


const NavMenu=styled.div`
    align-items:center;
    display:flex;
    flex-flow: row nowrap;
    height:100%;
    justify-content:flex-end;
    margin:0;
    padding:0;
    position:relative;
    margin-right:auto;
    margin-left:25px;
    
    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;
        
        span{
            color:rgb(249,249,249);
            font-size:13px;
            letter-spacing:1.42px;
            line-height:1.88;
            padding-left:5px;
            white-space:nowrap;
            position:relative;


            
            &:before{
                background-color:rgb(249,249,249);
                border-radius:0px 0px 4px 4px;
                bottom:-6px;
                content:"";
                height:2px;
                left:0px;
                opacity:0;
                position:absolute;
                right:0px;
                transform-origin:left center;
                transform:scaleX(0);
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                visibility:hidden;
                width:auto;
            }
            
            @media (max-width:768px){
                font-size:11px;
            }
        }
        
        &:hover{
            span:before{
                transform:scaleX(1);
                visibility:visible;
                opacity:1 !important;
            }
        }
        
    }

    
    

    @media (max-width:768px){
        margin-left:-100px;
    }

    

`;

const Login=styled.a`
    background-color:rgba(0,0,0,0.6);
    padding: 8px 16px;
    letter-spacing:1.5px;
    border:1px solid #f9f9f9;
    border-radius:4px;
    transition: all 0.2s ease 0s;
    &:hover{
        background-color:white;
        color:black;
        border-color:transparent;
    }
`;

const UserImg=styled.img`
    height:100%;
`;

const DropDown=styled.div`
    position:absolute;
    top:48px;
    right:0px;
    background:rgba(0,0,0,0.6);
    border:1px solid #f9f9f9;
    border-radius:4px;
    box-shadow:gray 0px 0px 18px 0px;
    padding:10px;
    font-size:14px;
    letter-spacing:3px;
    width:100px;
    opacity:0;
`;

const SignOut=styled.div`
    position:relative;
    height:48px;
    width:48px;
    display:flex;
    cursor:pointer;
    align-items:center;
    justify-content:center;
    ${UserImg}{
        border-radius:50%;
        width:100%;
        height:100%;
    }
    &:hover{
        ${DropDown}{
            opacity:1;
            transition-duration:1s;
        }
    }
`;



export default Header
