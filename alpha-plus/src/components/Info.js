
import styled from "styled-components";
import {useDispatch,useSelector} from "react-redux";
import {selectUserName,selectUserEmail,selectUserPhoto} from "../features/user/userSlice";

const Info = () => {

    const username=useSelector(selectUserName);
    const email=useSelector(selectUserEmail);
    const photo = useSelector(selectUserPhoto);

    return (
        <Container>
            <Content>
                <UserImage src={photo} alt=""/>
                <UserName>{username}</UserName>
                <UserEmail>{email}</UserEmail>
                <Message>You're Awesome</Message>
            </Content>
        </Container>
    )
}

const Container=styled.div`
    position: absolute;
    top:75px;
    background:url("images/homebg.jpg") center center / cover no-repeat fixed;
    width:100%;
    height:calc(100vh - 75px);
    overflow-x:hidden;
    z-index:-1;
`;

const Content=styled.div`
    display:grid;
    place-items:center;
    align-items:center;
    margin-top:125px;
`;

const UserImage=styled.img`
    
    width:200px;
    height: 200px;
    display:block;
    margin-left:auto;
    margin-right:auto;
`;

const UserName= styled.p`
    font-size:18px;
    letter-spacing:1.5px;
    margin-left:auto;
    margin-right:auto;
`;
const UserEmail= styled.p`
    font-size:18px;
    letter-spacing:1.5px;
    margin-left:auto;
    margin-right:auto;
`;

const Message=styled.p`
    font-weight:bold;
    color:white;
    background-color:rgb(36, 80, 80);
    margin-bottom:2PX;
    width:20%;
    letter-spacing:1.5px;
    font-size:18px;
    padding:16.5px 0;
    border:3px solid rgba(0,0,0,0.6);
    border-radius:20px;
    margin-left:auto;
    margin-right:auto;
    text-align:center;
    @media(max-width:786px){
        width:50%;
    }
`;

export default Info;
