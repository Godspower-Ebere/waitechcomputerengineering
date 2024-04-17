import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.jpg";
import t5 from "../assets/t5.jpg";
import t6 from "../assets/t6.jpg";
import t7 from "../assets/t7.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
export const Tools = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container px-4">
      <Slider {...settings}>
        <div
          data-aos="zoom-in"
          className="w-[300px] h-[200px]  cursor-pointer "
        >
          <img src={t1} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[300px] cursor-pointer ">
          <img src={t2} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[300px] cursor-pointer ">
          <img src={t3} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[300px] cursor-pointer ">
          <img src={t4} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[300px] cursor-pointer ">
          <img src={t5} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[300px] cursor-pointer ">
          <img src={t6} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[300px] cursor-pointer ">
          <img src={t7} alt="" className=" mx-4 w-full h-full" />
        </div>
      </Slider>
    </div>
  );
};
