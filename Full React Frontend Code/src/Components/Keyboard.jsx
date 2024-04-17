import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import k1 from "../assets/k1.jpg";
import k2 from "../assets/k2.jpg";
import k3 from "../assets/k3.jpg";
import k4 from "../assets/k4.jpg";
import k5 from "../assets/k5.jpg";
import k6 from "../assets/k6.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
export const Keyboard = () => {
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
          <img src={k1} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[200px] cursor-pointer ">
          <img src={k2} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[200px] cursor-pointer ">
          <img src={k3} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[200px] cursor-pointer ">
          <img src={k4} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[200px] cursor-pointer ">
          <img src={k5} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[200px] cursor-pointer ">
          <img src={k6} alt="" className=" mx-4 w-full h-full" />
        </div>
      </Slider>
    </div>
  );
};
