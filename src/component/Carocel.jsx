import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageOne from "../assets/IMG-20240625-WA0017.jpg";
import styled from "styled-components";
import ImageTwo from "../assets/IMG-20240625-WA0018.jpg";
import ImageThree from "../assets/IMG-20240625-WA0020.jpg";

const Carocel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <Slide>
          <img src={ImageOne} alt="" />
          
        </Slide>

        <Slide>
          <img src={ImageTwo} alt="" />
          
        </Slide>
        <Slide>
        <img src={ImageThree} alt="" />
          
        </Slide>
      </Slider>
    </div>
  );
};

export default Carocel;
const Slide = styled.div`
  height: 250px;
  img {
    /* margin-top: 100px; */
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Container = styled.div``;
