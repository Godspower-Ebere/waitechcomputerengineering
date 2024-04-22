import React, { useState, useEffect } from "react";
import so1 from "../assets/so1.jpg";
import so2 from "../assets/so2.jpg";
import so3 from "../assets/so3.jpg";
import so4 from "../assets/so4.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const Software = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex w-full justify-center flex-wrap">
      <Service
        image={so1}
        title="System Diagnostics"
        description="Is your computer running slow or crashing frequently? Our technicians can perform thorough system diagnostics to identify the root cause of the problem, whether it's due to software conflicts, driver issues, or hardware failures."
      ></Service>
      <Service
        image={so2}
        title="Virus and Malware Removal"
        description="Has your computer been infected with viruses or malware? Our technicians can remove malicious software and restore your system to its optimal state, ensuring that your personal data and sensitive information are protected from cyber threats."
      ></Service>
      <Service
        image={so3}
        title="Operating System Repair and Reinstallation"
        description="If your operating system is corrupted or experiencing issues, our technicians can repair or reinstall it to restore system stability and functionality. We'll ensure that your operating system is up-to-date and properly configured for optimal performance."
      ></Service>
      <Service
        image={so4}
        title="Data Recovery"
        description=" Accidentally deleted important files or lost data due to a hard drive failure? Our data recovery experts can help retrieve lost or corrupted data from hard drives, SSDs, and other storage devices, minimizing data loss and restoring your valuable files"
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
export default Software;
