import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpg";
import m4 from "../assets/m4.jpg";
import m5 from "../assets/m5.jpg";
import m6 from "../assets/m6.jpg";
import m7 from "../assets/m7.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
export const Mouse = () => {
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
          <img src={m1} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[300px] cursor-pointer ">
          <img src={m3} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[300px] cursor-pointer ">
          <img src={m3} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[300px] cursor-pointer ">
          <img src={m4} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[300px] cursor-pointer ">
          <img src={m5} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[300px] cursor-pointer ">
          <img src={m6} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[300px] cursor-pointer ">
          <img src={m7} alt="" className=" mx-4 w-full h-full" />
        </div>
      </Slider>
    </div>
  );
};
