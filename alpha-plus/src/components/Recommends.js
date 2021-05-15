
import styled from "styled-components";
import {Link} from "react-router-dom";

const Recommends = () => {
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                <Wrap>
                    <Link to="/details">
                        <img src="https://paulraylaight.files.wordpress.com/2019/05/avengers-endgame-2019-backgrounds.jpg" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/details">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/446a20cc-3d9c-4cdf-8845-cee8c49b5076/dcyiqvy-a7d736ed-5c0e-4220-9f66-6973e2117b1c.jpg/v1/fill/w_1280,h_720,q_75,strp/x_men_dark_phoenix_wallpaper_hd_by_joshua121penalba_dcyiqvy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNDQ2YTIwY2MtM2Q5Yy00Y2RmLTg4NDUtY2VlOGM0OWI1MDc2XC9kY3lpcXZ5LWE3ZDczNmVkLTVjMGUtNDIyMC05ZjY2LTY5NzNlMjExN2IxYy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.rx2s-DEhKqcog7lwTcILH2xvb943RwnjHR0DWp0IH8g" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/details">
                        <img src="https://i.pinimg.com/originals/b7/e0/33/b7e03367dd3a61a83801f47b60dae0ce.jpg" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/details">
                        <img src="https://sun9-71.userapi.com/impg/iGPcPgzOrXsAGlXJtAnB7uCCDwrHZYY876Kt1w/ZrliNOO09Ww.jpg?size=1280x800&quality=96&sign=dd97630e45b8955474f898fd6d8db447&type=album" alt=""/>
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

export default Recommends
