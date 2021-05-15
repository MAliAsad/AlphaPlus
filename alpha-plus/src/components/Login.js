import styled from "styled-components";

const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="images/AlphaPlus-logo.png" alt=""/>
                    <SignUp>99 problem but React ain't 1</SignUp>
                    <Description>Alpha Plus is a web based application for movies created by M Ali Asad. It is powered by React, Redux and Firebase. It includes all kind of features a movies application should have.</Description>
                    <CTALogoTwo src="images/AlphaPlus-logo2.png" alt=""/>
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container=styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    text-align:center;
    height:100vh;
`;



const Content=styled.div`
    margin-bottom:10vw;
    width: 100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:80px 40px;
    height:100%
`;

const BgImage=styled.div`
    height:100vh;
    background-position:top;
    background-size:cover;
    position:absolute;
    top:0;
    right:0;
    left:0;
    z-index:-1;
    background-image:url("images/AlphaplusBG.jpg");
`;

const CTA=styled.div`
    max-width:500px;
    width:100%;
    display:flex;
    flex-direction:column;
`;

const CTALogoOne=styled.img`
    margin-bottom:12px;
    max-width:400px;
    min-height:1px;
    max-height: 250px;
    display:block;
    width:100%;
    margin-left:auto;
    margin-right:auto;
`;

const SignUp=styled.div`
    font-weight:bold;
    color:white;
    background-color:rgb(36, 80, 80);
    margin-bottom:2PX;
    width:65%;
    letter-spacing:1.5px;
    font-size:18px;
    padding:16.5px 0;
    border:3px solid rgba(0,0,0,0.6);
    border-radius:20px;
    margin-left:auto;
    margin-right:auto;
`;


const Description=styled.p`
    color:hsla(0,0%,95.3%,1);
    font-size:12px;
    margin-bottom:12px;
    line-height:1.5;
    letter-spacing:1.5px;
`;

const CTALogoTwo=styled.img`
    margin-bottom:12px;
    max-width:170px;
    min-height:1px;
    max-height: 65px;
    display:block;
    width:100%;
    margin-left:auto;
    margin-right:auto;
`;

export default Login
