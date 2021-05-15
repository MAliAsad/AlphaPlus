
import styled from "styled-components";
import {Link} from "react-router-dom";

const Orignals = () => {
    return (
        <Container>
            <h4>Orignals</h4>
            <Content>
                <Wrap>
                    <Link to="/details">
                        <img src="https://hollywoodsuite.ca/wp-content/uploads/poster/HS903372_poster_1920_1080.jpg" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/details">
                        <img src="https://i.ytimg.com/vi/6b5DBQeh1cU/maxresdefault.jpg" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/details">
                        <img src="https://www.vpnhelpers.com/wp-content/uploads/2020/12/Watch-Naruto-Shippuden-All-21-Seasons-on-Netflix.jpg" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/details">
                        <img src="https://cdn.vox-cdn.com/thumbor/QPE1N2N92sL59_2vzpxp69g-1SU=/0x5:1000x672/1200x800/filters:focal(0x5:1000x672)/cdn.vox-cdn.com/uploads/chorus_image/image/46166388/bvs.0.jpg" alt=""/>
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

export default Orignals;
