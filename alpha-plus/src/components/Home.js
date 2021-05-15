
import styled from "styled-components";
import Slider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommeds from "./Recommends";
import NewAlpha from "./NewAlphaPLus";
import Orignals from "./Orignals";
import Trending from "./Trending"

const Home = () => {
    return (
        <div>
            <Container>
                <Slider/>
                <Viewers/>
                <Recommeds/>
                <NewAlpha/>
                <Orignals/>
                <Trending/>
            </Container>
        </div>
    )
}

const Container=styled.main`
    position:relative;
    min-height:calc(100vh - 250px);
    overflow-x:hidden;
    display:block;
    top:75px;
    padding:0 calc(3.5vw + 5px);
    &:after{
        background:url("/images/homebg.jpg") center center / cover no-repeat fixed;
        content:"";
        position:absolute;
        inset:0px;
        opacity: 1;
        z-index:-1;
    }
    

`;

export default Home
