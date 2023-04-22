import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import icons
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa';

// import images
import slide1 from '../assets/slide1.png';

const Hero = () => {
    const settings = {
        customPaging: function(i) {
            return (
              <div className="carusel-dot">
              </div>
            );
          },
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div className='container hero'>
      <div className="hero-infos">
        <h1>Центр подготовĸи товаров и продвижение магазина от Топ-Селлера Uzum</h1>
        <p>Упаĸовĸа, штрих-ĸодирование, размещение товара на сайт, ĸонсультирование и доставĸа на сĸлад Uzum</p>
        <div className="hero-btn">Оставь заявку Дяде Джо</div>
      </div>
      <div className="hero-slider">
        <Slider {...settings}>
            <div className="hero-slide" >
                <img src={slide1} alt="" />
            </div>
            <div className="hero-slide" >
                <img src={slide1} alt="" />
            </div>
        </Slider>
      </div>
    </div>
  );
}

export default Hero;


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className='slide-arrow slide-arrow-right'
        onClick={onClick}
      ><FaAngleRight/></div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className='slide-arrow slide-arrow-left'
        onClick={onClick}
      ><FaAngleLeft/></div>
    );
  }
