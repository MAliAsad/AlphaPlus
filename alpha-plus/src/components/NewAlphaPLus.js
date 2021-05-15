
import styled from "styled-components";
import {Link} from "react-router-dom";

const NewAlpha = () => {
    return (
        <Container>
            <h4>New to Alpha Plus</h4>
            <Content>
                <Wrap>
                    <Link to="/details">
                        <img src="https://i.ytimg.com/vi/aSiDu3Ywi8E/maxresdefault.jpg" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/details">
                        <img src="https://lh3.googleusercontent.com/Atdrepl4tNJS_wM23ywBLImHRGafVZJLBhAZkmWj9pThk5vluL-Bd2rfOlsjEZwNYfQYQl-xSe4" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/details">
                        <img src="https://i1.wp.com/thenerddaily.com/wp-content/uploads/2021/03/The-Flash-Season-6-TV-Series.jpg?fit=1000%2C742&ssl=1" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/details">
                        <img src="https://www.geekalerts.com/u/THOR-RAGNAROK-Blu-ray.jpg" alt=""/>
                    </Link>
                </Wrap>
            </Content>
        </Container>
    )
}

const Container=styled.div`
    padding:0 0 26px;

`;

const Content=styled.div`
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));
    @media(max-width:768px){
        grid-template-columns:repeat(2,minmax(0,1fr));
    }
`;

const Wrap=styled.div`
    padding-top:56.25%;
    border-radius:10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
    cursor:pointer;
    overflow:hidden;
    position:relative;
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    border: 2px solid rgba(249,249,249,0.1);
    img{
        inset:0px;
        width:100%;
        display:block;
        object-fit:cover;
        opacity:1;
        position:absolute;
        transition:opacity 500ms ease-in-out 0s;
        z-index:1;
        top:0;
    }
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 48px 58px -16px, rgb(0 0 0 /73%) 0px 30px 22px -10px;
        transform:scale(1.05);
        border-color:white;
    }
`;

export default NewAlpha;
