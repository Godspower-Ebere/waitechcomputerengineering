import React, { useState, useEffect } from "react";
import hi1 from "../assets/hi1.jpg";
import hi2 from "../assets/hi2.jpg";
import hi3 from "../assets/hi3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const HardwareInstallation = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex w-full justify-center flex-wrap">
      <Service
        image={hi1}
        title="Component Upgrades"
        description="Are you looking to boost your computer's performance by upgrading its hardware components? Whether it's installing a faster processor, adding more RAM, or upgrading to a larger hard drive or SSD, our technicians have the expertise to ensure that your hardware upgrades are installed correctly and seamlessly integrated with your existing system."
      ></Service>
      <Service
        image={hi2}
        title="Peripheral Setup"
        description="From printers and scanners to external hard drives and monitors, our technicians can help you set up and configure a wide range of peripheral devices, ensuring that they work seamlessly with your computer and meet your specific needs."
      ></Service>
      <Service
        image={hi3}
        title="Custom-Built Systems"
        description="Interested in building a custom computer tailored to your unique requirements? Our technicians can work with you to select the right components and build a custom system that meets your performance, functionality, and budgetary preferences, ensuring that every component is installed and configured correctly for optimal performance."
      ></Service>
    </div>
  );
};

const Service = ({ image, title, description }) => (
  <div className="hardwares m-4" data-aos="zoom-in">
    <div className="card w-96 bg-base-100 shadow-xl" data-aos="zoom-in">
      <figure>
        <img src={image} alt="Waitech computer engineering" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  </div>
);
export default HardwareInstallation;
