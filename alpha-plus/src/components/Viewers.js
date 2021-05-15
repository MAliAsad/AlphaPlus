import styled from 'styled-components';

const Viewers = () => {
    return (
        <div>
            <Container>
            
                <Wrap>
                        <Image src="/images/jjl.jpg"/>
                        <img src="/images/DClogo.jpg" alt=""/>
                </Wrap>
            
                <Wrap>
                    <Image src="/images/SS.jpg"/>
                    <img src="/images/SucideSquadlogo.jpg" alt=""/>
                </Wrap>
            
                <Wrap>
                    <Image src="/images/anime.jpg"/>
                    <img src="/images/Anime logo.jpg" alt=""/>
                </Wrap>
            
                <Wrap>
                    <Image src="/images/xmen.jpg"/>
                    <img src="/images/XMenLogo.jpg" alt=""/>
                </Wrap>
            
                <Wrap>
                    <Image src="/images/avengers.jpg"/>
                    <img src="/images/Marvellogo.jpg" alt=""/>
                </Wrap>
            
            </Container>
        </div>
    )
}

const Container=styled.div`
    margin-top:30px;
    padding:30px 0px 26px;
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns:repeat(5,minmax(0,1fr));

    @media(max-width:768px){
        grid-template-columns:repeat(1,minmax(0,1fr));
    }
`;
const Image=styled.img`
    
`;


const Wrap=styled.div`
   border-radius:10px;
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
   cursor:pointer;
   overflow:hidden;
   position:relative;
   transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
   border:3px solid rgba(249,249,249,0.1);
   img{
       inset:0px;
       display:block;
       height:20vh;
       width:100%;
       object-fit:cover;
       opacity:1;
       transition:opacity 500ms ease-in-out 0s;
       z-index:1;
       top:0;
       @media(max-width:768px){
            height:32vh;
        }
   }
   ${Image}{
        width: 100%;
        height:22vh;
        display:block;
        opacity:0;
        transition:opacity 500ms ease-in-out 0s;
        z-index:1;
        top:0;
        position:absolute;
        @media(max-width:768px){
            height:38vh;
        }
   }
   &:hover{
       transform:scale(1.05);
       border:3px solid white;
       img{
           opacity:0;
       }
       ${Image}{
           opacity:1;
       }
   }
`;



export default Viewers
