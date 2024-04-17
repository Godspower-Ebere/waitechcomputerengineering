import React from "react";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
const Hardware = () => {
  return (
    <div className="flex w-full justify-center flex-wrap">
      <Service
        image={s1}
        title="Screen Replacement"
        description="Accidentally cracked your laptop screen? Don't worry, our technicians can replace broken or damaged screens with high-quality replacements, restoring your laptop's functionality and visual clarity."
      ></Service>
      <Service
        image={s2}
        title="Component Replacement"
        description="Whether it's a faulty hard drive, a malfunctioning motherboard, or a damaged power supply, our technicians are skilled at diagnosing and replacing damaged components to ensure that your computer operates at peak performance."
      ></Service>
      <Service
        image={s3}
        title="Power Jack Repair"
        description="If your laptop isn't charging properly or you're experiencing intermittent power issues, it could be due to a faulty power jack. Our technicians can repair or replace damaged power jacks, allowing you to power up your laptop without any hassle."
      ></Service>
      <Service
        image={s4}
        title="Keyboard and Touchpad Repair"
        description=" Spilled coffee on your laptop keyboard? Our experts can clean and repair damaged keyboards and touchpads, or replace them with brand-new ones if necessary, so you can type and navigate with ease."
      ></Service>
    </div>
  );
};

const Service = ({ image, title, description }) => (
  <div className="hardwares m-4">
    <div className="card w-96 bg-base-100 shadow-xl">
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
export default Hardware;
