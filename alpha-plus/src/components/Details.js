import styled from "styled-components";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Details = () => {

    const notify=()=>{
        toast.info("Available Soon!",{position:toast.POSITION.TOP_CENTER});
    }

    return (
        <Container>
            <PlayButton onClick={notify}>
                <PlayCircleFilledIcon/>
                Play
            </PlayButton>
            <TrailerButton onClick={notify}>
                <PlayCircleOutlineIcon/>
                Trailer
            </TrailerButton>
            <SubTitle>
                2021 - 1h 30m - Alpha Plus by M Ali Asad
            </SubTitle>
            <Description>
            Alpha Plus is a web based application for movies created by M Ali Asad. It is powered by React, Redux and Firebase. It includes all kind of features a movies application should have.
            </Description>
        </Container>
    )
}

const Container=styled.div`
    inset:0;
    top:75px;
    background:url("/images/DetailBackground.jpg") center center / cover no-repeat fixed;   
    width:100vw;
    height:calc(100vh-75px);
    position:absolute;
    overflow-x:hidden;
    z-index:-1;
`;

const PlayButton=styled.button`
    position:fixed;
    background-color:white;
    color:black;
    height:55px;
    width:120px;
    bottom:200px;
    letter-spacing:1.5px;
    left:70px; 
    border-radius:4px;
    display: grid;
    place-items: center;
    display:flex;
    padding:0 25px;
    cursor:pointer;
    &:hover{
        background-color:rgba(208,211,212,0.2);
        border:1px solid white;
        color:white;
    }

    @media (max-width:786px){
        left:30px;
        height:50px;
        width:100px;
        padding:0 20px;
    }

`;
const TrailerButton=styled.button`
    position: absolute;
    background-color:rgba(0,0,0,0.8);
    border:1px solid white;
    color: white;
    height:55px;
    width:150px;
    bottom: 200px;
    left: 200px;
    display:grid;
    place-items:center;
    display:flex;
    border-radius:4px;
    padding:0 35px;
    letter-spacing:1.5;
    cursor:pointer;

    &:hover{
        background-color:rgba(208,211,212,0.2);
        border:1px solid white;
        color:white;
    }

    @media (max-width:786px){
        left:145px;
        height:50px;
        width:120px;
        padding:0 25px;
    }
`;

const SubTitle=styled.p`
    position: absolute;
    bottom: 150px;
    left: 70px;
    letter-spacing:1.5px;
    font-size:13px;
    @media (max-width:786px){
        left:30px;
    }
`;
    
const Description=styled.p`
    position: absolute;
    bottom: 100px;
    left: 70px;
    letter-spacing:1.5px;
    font-size:15px;
    width:850px;
    @media (max-width:786px){
        left:30px;
        width:350px;
        bottom: 50px;
    }
`;
    

export default Details
