import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import boss from "../assets/boss.png";
import Timeline from "../Components/Timeline";
import Testimonial from "../Components/Testimonial";
import { FaTools } from "react-icons/fa";
import { FiShield, FiSettings, FiDatabase } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";
import { Tools } from "../Components/Tools";
import { Link } from "react-router-dom";
const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className=" bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('bg2.png')] hero w-full h-[50vh] flex justify-center items-center">
        <h1 className="mb-5 text-5xl font-bold text-white">About Us</h1>
      </div>
      {/* About Us Section */}
      <section className="p-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="max-w-full mx-auto md:mx-0">
              <img
                src="https://imuscomputercollege.net.ph/wp-content/uploads/2014/08/computer-technician.jpg"
                alt="Waitech Computer Engineering"
                className="rounded-lg"
                data-aos="zoom-in"
              />
            </div>
            {/* Content */}
            <div>
              <p className="text-lg mb-4" data-aos="zoom-in">
                At Waitech Computer Engineering, we're on a mission to make
                technology accessible to everyone. Founded in 2015, we are
                dedicated to providing top-tier computer repair, maintenance,
                and technology solutions to individuals, schools, and non-profit
                organizations.
              </p>

              <p className="text-lg mt-4" data-aos="zoom-in">
                Our mission is to bridge the digital divide and empower
                individuals and communities through technology. We believe that
                access to reliable technology is essential for personal growth,
                education, and economic opportunity. Through our services, we
                aim to level the playing field and ensure that everyone has the
                tools they need to succeed in today's digital world.
              </p>
              <p className="text-lg mt-4" data-aos="zoom-out">
                We pride ourselves on our expertise in diagnosing and fixing
                hardware issues, troubleshooting software problems, removing
                viruses and malware, recovering lost data, setting up and
                configuring networks, and offering IT consulting services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-brown p-4 ">
        <div className="container mx-auto">
          <div className="">
            {/* Content */}
            <div>
              <div className="px-2 mb-2 container flex flex-col md:flex-row md:justify-between justify-center bg-slate-800 text-white">
                <div className="md:w-[50%] w-full flex items-center">
                  <div className="cont" data-aos="zoom-out">
                    <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
                      Company History
                    </h2>
                    <p className="mb-4 text-lg">
                      Waitech Computer Engineering was founded in
                      <b> 2015 by Tunde Akinsowon.</b> What started as a passion
                      project in a small garage has since grown into a leading
                      provider of computer repair and IT solutions at 35 Isijola
                      St, Ikotun, Lagos 102213, Lagos.
                    </p>
                  </div>
                </div>

                <div className="md:w-[50%] w-full relative">
                  <img src={boss} alt="About Us" className="rounded-lg" />
                  <div
                    className="title bg-white w-full p-3 rounded-t-3xl border-[3px]"
                    data-aos="zoom-out"
                  >
                    <h1
                      className=" text-center text-3xl font-bold mb-2 text-black"
                      data-aos="zoom-in"
                    >
                      Tunde Akinsowon
                    </h1>
                    <p
                      data-aos="zoom-in"
                      className=" text-center text-2xl font-bold text-black"
                    >
                      Co-Founder & CEO
                    </p>
                  </div>
                </div>
              </div>
              <Timeline></Timeline>
              <h3 className="text-3xl font-bold mb-2 mt-8 text-center">
                Significant Achievements
              </h3>
              <ul className="md:flex text-lg ml-6">
                <li
                  data-aos="zoom-in"
                  className="mb-2 border-[3px] border-blue-950 rounded-2xl p-2"
                >
                  <b>Client Satisfaction:</b> Throughout its journey, Waitech
                  Computer Engineering has remained committed to delivering
                  top-notch service and ensuring client satisfaction. The
                  company has built a reputation for reliability, expertise, and
                  professionalism.
                </li>
                <li
                  data-aos="zoom-out"
                  className="mb-2 border-[3px] border-blue-950 rounded-2xl p-2"
                >
                  <b>Community Impact: </b> Beyond business success, Waitech
                  Computer Engineering takes pride in its contributions to the
                  local community. The company has participated in various
                  community outreach programs, providing technology education
                  and support to underserved populations.
                </li>
                <li
                  data-aos="zoom-in"
                  className="mb-2 border-[3px] border-blue-950 rounded-2xl p-2"
                >
                  <b>Innovation:</b> Waitech Computer Engineering continues to
                  stay at the forefront of technological advancements,
                  constantly updating its knowledge and expertise to meet the
                  evolving needs of its clients.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4">
        <h3
          data-aos="zoom-in"
          className="text-3xl font-bold mb-2 mt-8 text-center"
        >
          Giving Back to Our Community
        </h3>
        <p data-aos="zoom-in" className="px-4 text-[20px] mb-10">
          At Waitech Computer Engineering, we believe in giving back to the
          communities that have supported us. We are proud to be actively
          involved in various initiatives and projects that aim to make a
          positive impact locally and beyond. Here are some ways we contribute:
        </p>
        <ul className="md:flex text-lg ml-6">
          <li
            data-aos="zoom-in"
            className="mb-2 border-[3px] border-blue-950 rounded-2xl p-2"
          >
            <b>Tech Support for Non-Profits:</b> We understand the vital role
            that non-profit organizations play in our community. That's why we
            offer pro bono tech support services to non-profits, helping them
            optimize their IT infrastructure and maximize their impact without
            the burden of hefty expenses.
          </li>
          <li
            data-aos="zoom-out"
            className="mb-2 border-[3px] border-blue-950 rounded-2xl p-2"
          >
            <b>Educational Programs: </b> We are passionate about nurturing the
            next generation of tech enthusiasts. We regularly collaborate with
            schools, colleges, and educational institutions to provide
            workshops, seminars, and mentorship programs aimed at empowering
            students with essential tech skills and knowledge.
          </li>
          <li
            data-aos="zoom-in"
            className="mb-2 border-[3px] border-blue-950 rounded-2xl p-2"
          >
            <b>Community Outreach: </b> Beyond formal programs, we are always
            ready to lend a helping hand wherever it's needed. Whether it's
            volunteering at local schools, participating in neighborhood
            clean-up drives, or assisting elderly residents with their tech
            needs, we are committed to making a positive difference in our
            community.
          </li>
        </ul>
      </section>
      <section className="py-16 px-4 ">
        <div className="container mx-auto">
          <h3
            data-aos="zoom-in"
            className="text-3xl font-bold mb-2 mt-8 text-center"
          >
            Technology and Tools
          </h3>
          <p className="mb-4 text-lg">
            Waitech Computer Engineering leverages cutting-edge technology and
            tools to deliver high-quality services to its clients. Our team of
            experts is proficient in a wide range of technologies and platforms,
            allowing us to provide comprehensive solutions tailored to each
            client's unique needs.
          </p>
        </div>
        <Tools></Tools>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('bg2.jpeg')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto text-white">
          <h2 className="text-3xl font-bold mb-8 text-bold text-center">
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
      <Testimonial></Testimonial>
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

export default About;
