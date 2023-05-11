import { useContext } from "react";
import Context from "../context/Context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import icons
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa';

// import images
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';

const Hero = () => {
  const {lang, data, setModal} = useContext(Context);
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
    <div className='container hero' id="hero">
      <div className="hero-infos">
        <h1>{data[lang].heroTitle}</h1>
        <p>{data[lang].heroText}</p>
        <div className="hero-btn" onClick={()=>setModal(true)}>{data[lang].sendBtn}</div>
      </div>
      <div className="hero-slider">
        <Slider {...settings}>
            <div className="hero-slide" >
                <img src={slide1} alt="" />
            </div>
            <div className="hero-slide" >
                <img src={slide2} alt="" />
            </div>
            <div className="hero-slide" >
                <img src={slide3} alt="" />
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
