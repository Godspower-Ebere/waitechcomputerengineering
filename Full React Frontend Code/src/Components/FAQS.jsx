import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const FAQS = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium" data-aos="zoom-in">
          What computer repair services do you offer?
        </div>
        <div className="collapse-content">
          <p>
            At Waitech Computer Engineering, we provide a comprehensive range of
            computer repair services, including hardware diagnostics and repair,
            software troubleshooting, virus/malware removal, data recovery, and
            more. Whether your computer is running slowly, won't boot up, or is
            experiencing other issues, our expert technicians are here to help.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium" data-aos="zoom-in">
          Do you offer on-site repair services?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we offer both on-site and in-store repair services for your
            convenience. Our technicians can visit your home or office to
            diagnose and resolve computer issues on-site, or you can bring your
            device to our repair center for prompt service.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium" data-aos="zoom-in">
          What brands of computers do you sell?
        </div>
        <div className="collapse-content">
          <p>
            We are proud to offer a wide selection of leading computer brands,
            including Dell, HP, Lenovo, Apple, ASUS, and more. Whether you're
            looking for a powerful desktop workstation, a sleek laptop for
            on-the-go productivity, or accessories to enhance your computing
            experience, we have you covered.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium" data-aos="zoom-in">
          Are your technicians certified and experienced?
        </div>
        <div className="collapse-content">
          <p>
            Absolutely! Our team of technicians is highly skilled, certified,
            and experienced in diagnosing and repairing a wide range of computer
            issues. We stay up-to-date with the latest technologies and best
            practices to provide efficient and reliable repair services for our
            customers.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium" data-aos="zoom-in">
          Can you assist with setting up a new computer or transferring data?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we offer setup and data transfer services to help you get your
            new computer up and running smoothly. Our technicians can assist
            with transferring files, installing software, configuring settings,
            and providing personalized guidance to ensure you're fully satisfied
            with your new device.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium" data-aos="zoom-in">
          What types of computer accessories do you sell?
        </div>
        <div className="collapse-content">
          <p>
            We offer a wide range of computer accessories to enhance your
            computing experience, including keyboards, mice, monitors, speakers,
            external storage devices, cables, adapters, and more. Whether you
            need to upgrade your peripherals or expand your connectivity
            options, we have the accessories you need.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium" data-aos="zoom-in">
          Can you provide remote tech support services?
        </div>
        <div className="collapse-content">
          <p>
            Absolutely! We offer remote tech support services to assist you with
            troubleshooting and resolving software-related issues without the
            need for an on-site visit. Our technicians can remotely access your
            computer to diagnose problems, provide guidance, and perform
            repairs, saving you time and hassle.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium" data-aos="zoom-in">
          How long does a typical computer repair service take?
        </div>
        <div className="collapse-content">
          <p>
            The duration of a computer repair service can vary depending on the
            nature and severity of the issue. Our goal is to provide prompt and
            efficient service to minimize downtime and inconvenience for our
            customers. We'll provide you with an estimated timeline for your
            repair service based on the initial diagnosis.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium" data-aos="zoom-in">
          Do you offer data backup and recovery services?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we offer data backup and recovery services to help safeguard
            your important files and recover lost data due to hardware failure,
            accidental deletion, or other issues. Our technicians can assist you
            in implementing backup solutions and retrieving data from damaged or
            inaccessible storage devices.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium" data-aos="zoom-in">
          Are your products and services available for both residential and
          business customers?
        </div>
        <div className="collapse-content">
          <p>
            Absolutely! We cater to both residential and business customers,
            providing tailored solutions to meet the unique needs of each.
            Whether you need a single computer repaired at home or require IT
            support for your business network, we're here to assist you every
            step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
