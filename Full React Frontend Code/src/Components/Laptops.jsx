import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import l1 from "../assets/l1.jpg";
import l2 from "../assets/l2.jpg";
import l3 from "../assets/l3.jpg";
import l4 from "../assets/l4.jpg";
import l5 from "../assets/l5.jpg";
import l6 from "../assets/l6.jpg";
import l7 from "../assets/l7.jpg";
import l8 from "../assets/l8.jpg";
import l9 from "../assets/l9.jpg";
import l10 from "../assets/l10.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
export const Laptops = () => {
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
          className="w-[300px] h-[250px]  cursor-pointer "
        >
          <img src={l1} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[250px] cursor-pointer ">
          <img src={l2} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[250px] cursor-pointer ">
          <img src={l3} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[250px] cursor-pointer ">
          <img src={l4} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[250px] cursor-pointer ">
          <img src={l5} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[250px] cursor-pointer ">
          <img src={l6} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[250px] cursor-pointer ">
          <img src={l7} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[250px] cursor-pointer ">
          <img src={l8} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[250px] cursor-pointer ">
          <img src={l9} alt="" className=" mx-4 w-full h-full" />
        </div>
        <div data-aos="zoom-in" className="w-[300px] h-[200px] cursor-pointer ">
          <img src={l10} alt="" className=" mx-4 w-full h-full" />
        </div>
      </Slider>
    </div>
  );
};
