import React, { useState, useEffect } from "react";
import si1 from "../assets/si1.jpg";
import si2 from "../assets/si2.jpg";
import si3 from "../assets/si3.jpg";
import si4 from "../assets/si4.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const SoftwareInstallation = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex w-full justify-center flex-wrap">
      <Service
        image={si1}
        title="Operating System Installation"
        description="Whether you're upgrading to the latest version of Windows or installing a Linux distribution, our technicians can handle the installation and configuration of your operating system, ensuring that it's set up correctly and optimized for performance and security."
      ></Service>
      <Service
        image={si2}
        title="Application Installation"
        description="Need help installing and configuring software applications on your computer? Whether it's productivity software, antivirus programs, graphic design tools, or multimedia applications, our technicians can ensure that your software is installed correctly and configured to work seamlessly with your system."
      ></Service>
      <Service
        image={si3}
        title="Driver Installation and Updates"
        description="Properly installed and up-to-date drivers are essential for ensuring that your hardware components function correctly. Our technicians can help you install and update drivers for your devices, ensuring compatibility and optimal performance."
      ></Service>
      <Service
        image={si4}
        title="Software Integration"
        description=" Do you need assistance integrating different software applications or ensuring compatibility between your software and hardware? Our technicians can help you seamlessly integrate your software solutions, ensuring that they work together harmoniously to meet your needs and objectives."
      ></Service>
    </div>
  );
};

const Service = ({ image, title, description }) => (
  <div className="hardwares m-4">
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
export default SoftwareInstallation;
