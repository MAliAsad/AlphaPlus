import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
   
    let settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToScroll:1,
        autoplay:true
    }

    return (
        <Carousel {...settings}>
            <Wrap> 
                <a>
                <img src="./images/Joker.jpg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                <img src="./images/Kaneki.jpg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                <img src="./images/Hulk.jpg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                <img src="./images/Ironman.jpg" alt="" />
                </a>
            </Wrap>
        </Carousel>
    )
}

const Carousel= styled(Slider)`
    margin-top:20px;
    &>button{
        opacity:0;
        height:100%;
        width:5vw;
        z-index:1;

        &:hover{
            opacity:1;
            transition:opacity 0.1s ease;
        }

    }
    
    ul li button{
        &:before{
            font-size:10px;
            color:rgb(150,158,171);
        }
    }

    li.slick-active button:before{
        color:white;
    }

    .slick-list{
        overflow:initial;
    }
    .slick-prev{
        left:-68px;
    }
    .slick-next{
        right:-68px;
    }
    

`;

const Wrap=styled.div`
    border-radius:4px;
    position:relative;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
    a{
        display:block;
        position:relative;
        margin:0px 5px;
        img{
            width:100%;
            height:44vh;
            box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
            margin-left:auto;
            border: 2px solid rgba(249,249,249,0.1);
            margin-right:auto;
            border-radius:4px;
            &:hover{
                border:3px solid white;
                border-radius: 4px;
                padding:0;
                transition-duration:200ms;
                cursor:pointer;
            }
            @media(max-width:768px){
                height:20vh;
            }
        }

    }

`;

export default ImgSlider
