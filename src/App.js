
import './App.css';
import Slider from "react-slick";
import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo5.png';
import { useState } from 'react';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
// BsArrowRight BsArrowLeft

const logos = [logo1, logo2, logo3, logo4, logo5, logo1];

function SampleNextArrow({ onClick }) {

  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <BsArrowRight />
    </div>

  );
}

function SamplePrevArrow({ onClick }) {

  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <BsArrowLeft />
    </div>

  );
}

function App() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    centerPadding: 0,
    // beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="container">

      {/* <h2 className='header'> Single Item</h2> */}
      <div className="slider">
        <Slider {...settings}

        >
          {
            logos.map((logo, index) => (
              <div className="slide" key={index} >
                {/* <div className={index === slideIndex ? "slide slide-active" : "slide"} key={index} > */}
                <img src={logo} alt="" />
              </div>
            ))
          }
        </Slider>
      </div>
    </div >

  );
}

export default App;
