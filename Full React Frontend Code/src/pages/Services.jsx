import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiSettings,
  FiDatabase,
  FiShield,
  FiArrowDownCircle,
} from "react-icons/fi"; // Importing react icons for the example
import Hardware from "../Components/Hardware";
import Software from "../Components/Software";
import HardwareInstallation from "../Components/HardwareInstallation";
import SoftwareInstallation from "../Components/SoftwareInstallation";
import Testimonial from "../Components/Testimonial";
import FAQS from "../Components/FAQS";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className=" bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('bg3.jpg')] hero w-full h-[50vh] flex justify-center items-center">
        <h1 className="mb-5 text-5xl font-bold text-white">Our Services</h1>
      </div>

      <section
        data-aos="zoom-in"
        className="py-5 px-4 bg-[linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6),rgba(255,255,255,0.6)),url('https//nelpatel.com/wp-content/uploads/fly-images/107300/Testimonial-Examples_Featured-Image-1200x675-c.png')] bg-no-repeat bg-center bg-cover "
      >
        <div className="container mx-auto" data-aos="zoom-in">
          <h2
            className="text-[30px] font-bold mb-8 text-center"
            data-aos="zoom-in"
          >
            Overview of Services
          </h2>
          <p className="text-xl">
            Welcome to Waitech Computer Engineering, your trusted partner for
            all your technology needs. At Waitech, we specialize in providing
            comprehensive solutions to address a wide range of computer-related
            issues and challenges. With our team of experienced technicians and
            dedication to customer satisfaction, we are committed to delivering
            reliable, efficient, and cost-effective services tailored to meet
            your unique requirements.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://aul.edu.ng/static/images/reviews/computerengineering.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto text-white">
          <h2
            className="text-3xl font-bold mb-8 text-bold text-center"
            data-aos="zoom-in"
          >
            Key Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FiSettings className="text-gray-600 mr-2" />}
              title="Computer Repair and Maintenance"
              description="From hardware malfunctions to software glitches, our expert technicians have the skills and knowledge to diagnose and repair a variety of computer issues quickly and effectively. Whether your computer is running slow, experiencing frequent crashes, or displaying error messages, we can get it back up and running smoothly in no time."
            />
            <ServiceCard
              icon={<FiShield className="text-gray-600 mr-2" />}
              title="Networking Solutions"
              description="In today's interconnected world, a reliable network is essential for both home and business users. We offer comprehensive networking solutions to help you set up, optimize, and troubleshoot your wired or wireless network infrastructure. Whether you need assistance with router configuration, network security, or troubleshooting connectivity issues, we've got you covered."
            />
            <ServiceCard
              icon={<FiShield className="text-gray-600 mr-2" />}
              title="Data Recovery and Backup"
              description="Losing important data can be a nightmare. Fortunately, our data recovery and backup services can help you retrieve lost or corrupted files and ensure that your valuable data is protected against unforeseen disasters. Whether you've accidentally deleted files, experienced a hard drive failure, or fallen victim to a virus attack, we can help recover your data and implement reliable backup solutions to prevent future data loss."
            />
            <ServiceCard
              icon={<FiDatabase className="text-gray-600 mr-2" />}
              title="Hardware and Software Installation"
              description="Whether you're upgrading your hardware or installing new software applications, our technicians can handle all your installation needs with precision and expertise. We'll ensure that your hardware components are installed correctly and that your software applications are configured to work seamlessly with your system, allowing you to maximize performance and productivity."
            />
            <ServiceCard
              icon={<FiShield className="text-gray-600 mr-2" />}
              title="Custom-Built Computers"
              description="Looking for a computer that meets your specific requirements and preferences? Our custom-built computer solutions allow you to design a system that suits your needs, whether you're a gamer, a designer, or a business professional. We'll work with you to select the right components and build a computer that delivers the performance, reliability, and functionality you need."
            />
          </div>
        </div>
      </section>

      <section
        data-aos="zoom-in"
        className="md:m-4 border-[1px] border-black py-5 px-4 bg-[linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6),rgba(255,255,255,0.6)),url('https//nelpatel.com/wp-content/uploads/fly-images/107300/Testimonial-Examples_Featured-Image-1200x675-c.png')] bg-no-repeat bg-center bg-cover "
      >
        <div className="container mx-auto" data-aos="zoom-in">
          <h2
            className="text-[30px] font-bold mb-8 text-center uppercase"
            data-aos="zoom-in"
          >
            Computer Repair and Maintenance
          </h2>
          <p className="text-xl">
            At Waitech Computer Engineering, we understand how frustrating it
            can be when your computer encounters problems. That's why we offer
            comprehensive computer repair and maintenance services to get your
            system back up and running smoothly in no time. in two categories
            <b> Hardware Repairs</b> & <b>Software Troubleshooting</b>
          </p>
        </div>
        <div className="hardware">
          <h1
            className="text-[30px] font-bold mt-8 text-center"
            data-aos="zoom-in"
          >
            Hardware Repairs
          </h1>
          <hr className="border-[1px] border-black" />
          <Hardware></Hardware>
        </div>
        <div className="hardware">
          <h1
            className="text-[30px] font-bold mt-8 text-center"
            data-aos="zoom-in"
          >
            Software Troubleshooting
          </h1>
          <hr className="border-[1px] border-black" />
          <Software></Software>
        </div>
        <div className="container mx-auto" data-aos="zoom-in">
          <p className="text-xl">
            Whether your computer is in need of <b> Hardware Repairs</b> or
            <b> Software Troubleshooting</b>, you can count on Waitech Computer
            Engineering to provide reliable and efficient solutions tailored to
            meet your needs. Contact us today to schedule a repair appointment
            and get your computer back in top shape!
          </p>
        </div>
      </section>

      <section
        data-aos="zoom-in"
        className="md:m-4  border-[1px] border-black py-5 px-4 bg-[linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6),rgba(255,255,255,0.6)),url('https//nelpatel.com/wp-content/uploads/fly-images/107300/Testimonial-Examples_Featured-Image-1200x675-c.png')] bg-no-repeat bg-center bg-cover "
      >
        <div className="container mx-auto" data-aos="zoom-in">
          <h2
            className="text-[30px] font-bold mb-8 text-center uppercase"
            data-aos="zoom-in"
          >
            Hardware and Software Installation
          </h2>
          <p className="text-xl">
            At Waitech Computer Engineering, we understand the importance of
            having your hardware and software installed correctly to ensure
            optimal performance and productivity. Whether you're upgrading your
            existing system or installing new components, our expert technicians
            are here to help.
          </p>
        </div>
        <div className="hardware">
          <h1
            className="text-[30px] font-bold mt-8 text-center"
            data-aos="zoom-in"
          >
            Hardware Installation
          </h1>
          <hr className="border-[1px] border-black" />
          <HardwareInstallation></HardwareInstallation>
        </div>
        <div className="hardware">
          <h1
            className="text-[30px] font-bold mt-8 text-center"
            data-aos="zoom-in"
          >
            Software Installation and Configuration
          </h1>
          <hr className="border-[1px] border-black" />
          <SoftwareInstallation></SoftwareInstallation>
        </div>
        <div className="container mx-auto" data-aos="zoom-in">
          <p className="text-xl">
            Whether you're upgrading your hardware or installing new software
            applications, you can count on Waitech Computer Engineering to
            handle all your installation needs with precision and expertise.
            Contact us today to learn more about how we can help you maximize
            performance and productivity with our hardware and software
            installation services.
          </p>
        </div>
      </section>
      <Testimonial></Testimonial>
      <div className="intouch w-full flex justify-center" data-aos="zoom-in">
        <button className="btn btn-primary">
          <Link to="/contact">GET IN TOUCH WITH US FOR MORE INFO</Link>
        </button>
      </div>
      <section className="py-16 px-4 bg-gray-300" data-aos="zoom-in">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8" data-aos="zoom-in">
            Frequently Asked Questions (FAQs)
          </h2>
          <FAQS></FAQS>
        </div>
      </section>
      <div className="intouch w-full flex justify-center" data-aos="zoom-in">
        <button className="btn btn-primary">
          <Link to="/contact">GET IN TOUCH WITH US FOR MORE INFO</Link>
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};
const ServiceCard = ({ icon, title, description }) => (
  <div
    className="p-6 bg-white rounded-lg shadow-md text-gray-800"
    data-aos="zoom-in"
  >
    <h3 className="text-xl font-semibold mb-4 flex items-center">
      {icon} {title}
    </h3>
    <p>{description}</p>
  </div>
);
export default Services;
