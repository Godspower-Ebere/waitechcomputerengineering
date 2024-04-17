import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import {
  FiCheckCircle,
  FiSettings,
  FiDatabase,
  FiShield,
  FiArrowDownCircle,
} from "react-icons/fi"; // Importing react icons for the example
import Navbar from "../Components/Navbar";
import Testimonial from "../Components/Testimonial";
// import Form from "../Components/Form";
import Footer from "../Components/Footer";
import FAQS from "../Components/FAQS";
import Product from "../Components/Product";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <Navbar />
      <section className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('bg.jpg')] hero min-h-screen bg-cover bg-center relative flex items-center justify-center">
        <div className="hero-content text-center text-white ">
          <div className="max-w-full mx-auto">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to{" "}
              <ReactTyped
                strings={["Waitech Computer Engineering"]}
                typeSpeed={150}
              />
            </h1>
            <p className="mb-8 text-[25px]">
              Your premier destination for top-notch computer repair and IT
              solutions. <br />
              We specialize in{" "}
              <ReactTyped
                strings={[
                  "hardware repair",
                  "software troubleshooting",
                  "virus removal",
                  "data recovery",
                  "network setup",
                  "IT consulting",
                ]}
                typeSpeed={150}
                backSpeed={40}
                loop
              />{" "}
              and much more.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2">
            <FiArrowDownCircle className="text-white text-4xl animate-bounce" />
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="max-w-full mx-auto md:mx-0">
              <img
                src="https://st2.depositphotos.com/3591429/10464/i/450/depositphotos_104648666-stock-photo-group-of-people-brainstorming-on.jpg"
                alt="Waitech Computer Engineering"
                className="rounded-lg"
                data-aos="zoom-in"
              />
            </div>
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold mb-4" data-aos="zoom-in">
                About Waitech Computer Engineering
              </h2>
              <p className="text-lg mb-4" data-aos="zoom-in">
                At Waitech Computer Engineering, we're on a mission to make
                technology accessible to everyone. Founded in 2015, we are
                dedicated to providing top-tier computer repair, maintenance,
                and technology solutions to individuals, schools, and non-profit
                organizations.
              </p>

              <p className="text-lg mt-4" data-aos="zoom-out">
                Our mission is to bridge the digital divide and empower
                individuals and communities through technology. We believe that
                access to reliable technology is essential for personal growth,
                education, and economic opportunity. Through our services, we
                aim to level the playing field and ensure that everyone has the
                tools they need to succeed in today's digital world.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 px-4 bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://aul.edu.ng/static/images/reviews/computerengineering.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto text-white">
          <h2
            className="text-3xl font-bold mb-8 text-bold text-center"
            data-aos="zoom-in"
          >
            Services Offered by Waitech Computer Engineering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FiSettings className="text-gray-600 mr-2" />}
              title="Hardware Repair and Maintenance"
              description="Diagnosing and fixing hardware issues with computers, laptops, servers, and peripherals."
            />
            <ServiceCard
              icon={<FiShield className="text-gray-600 mr-2" />}
              title="Software Installation and Troubleshooting"
              description="Installing, configuring, and troubleshooting operating systems and software applications."
            />
            <ServiceCard
              icon={<FiShield className="text-gray-600 mr-2" />}
              title="Virus and Malware Removal"
              description="Detecting and removing viruses, spyware, adware, and other malicious software infections."
            />
            <ServiceCard
              icon={<FiDatabase className="text-gray-600 mr-2" />}
              title="Data Recovery"
              description="Recovering lost or corrupted data from hard drives, SSDs, and other storage devices."
            />
            <ServiceCard
              icon={<FiShield className="text-gray-600 mr-2" />}
              title="Network Setup and Configuration"
              description="Designing, installing, and configuring wired and wireless network infrastructure, including routers, switches, access points, and network cabling. Setting up secure network connections and addressing connectivity issues."
            />
            <ServiceCard
              icon={<FiSettings className="text-gray-600 mr-2" />}
              title="IT Consulting and Support"
              description="Providing technical advice and guidance to businesses and individuals on technology-related matters. Offering recommendations for hardware and software upgrades, network optimizations, and cybersecurity measures."
            />
            <ServiceCard
              icon={<FiDatabase className="text-gray-600 mr-2" />}
              title="Remote Support Services"
              description="Providing technical assistance and troubleshooting remotely via phone, email, or remote desktop software. This allows technicians to resolve issues without physically visiting the client's location."
            />
            <ServiceCard
              icon={<FiSettings className="text-gray-600 mr-2" />}
              title="Training and Education"
              description="Offering training sessions and workshops to individuals or organizations on topics such as computer basics, software usage, hardwares, and best practices for maintaining computer systems."
            />
            <ServiceCard
              icon={<FiDatabase className="text-gray-600 mr-2" />}
              title="On-Site Support Services"
              description="Visiting clients' locations to perform maintenance tasks, troubleshoot hardware or software issues, and provide hands-on technical assistance."
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-4 ">
        <div className="container mx-auto" data-aos="zoom-in">
          <h2
            data-aos="zoom-in"
            className="text-[30px] font-bold mb-8 text-center"
          >
            List of Quality Products we offer
          </h2>
          <Product></Product>
        </div>
      </section>
      {/* Testimonials Section */}
      <section
        data-aos="zoom-in"
        className="py-16 px-4 bg-[linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6),rgba(255,255,255,0.6)),url('https://neilpatel.com/wp-content/uploads/fly-images/107300/Testimonial-Examples_Featured-Image-1200x675-c.png')] bg-no-repeat bg-center bg-cover "
      >
        <div className="container mx-auto" data-aos="zoom-in">
          <h2
            className="text-[30px] font-bold mb-8 text-center"
            data-aos="zoom-in"
          >
            Testimonials
          </h2>
          <Testimonial></Testimonial>
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-300" data-aos="zoom-in">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8" data-aos="zoom-in">
            Frequently Asked Questions (FAQs)
          </h2>
          <FAQS></FAQS>
        </div>
      </section>
      {/* <Form></Form> */}
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

export default Home;
