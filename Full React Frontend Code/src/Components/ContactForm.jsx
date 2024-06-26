import React, { useState, useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f6fxk8n", "template_ahh3tu6", form.current, {
        publicKey: "iiu2uyLyeNi5P6Pob",
      })
      .then(
        () => {
          toast.success("Message Sent Successfully !!!");
        },
        (error) => {
          toast.error(
            "Unable to deliver your message check your internet connection"
          );
        }
      );
  };

  return (
    <div class="container mx-auto py-10">
      <ToastContainer />
      <h1 class="text-4xl font-bold md:text-center mb-5" data-aos="zoom-in">
        Have questions? Shoot us an email.{" "}
      </h1>

      <div class="max-w-md mx-auto bg-white p-8 rounded-md shadow-md ">
        <div class="mb-4">
          <p class="text-gray-700 text-lg" required>
            <span data-aos="zoom-in" class="font-bold">
              Address:
            </span>{" "}
            No 57, Isojola Street, Ikotun Lagos, Nigeria.
          </p>
          <p data-aos="zoom-in" class="text-gray-700 text-lg" required>
            <span class="font-bold">Phone:</span> 08131203866, 08024421035
          </p>
          <p data-aos="zoom-in" class="text-gray-700 text-lg" required>
            <span class="font-bold">Email:</span> akinsowontunde737@gmail.com
          </p>
          <p data-aos="zoom-in" class="text-gray-700 text-lg" required>
            <span class="font-bold">Business Hours:</span> Monday - Saturday:{" "}
            <br />
            <b>9:00 AM - 7:00 PM</b>
          </p>
        </div>
        <form
          action="#"
          method="POST"
          data-aos="zoom-in"
          className=""
          ref={form}
          onSubmit={sendEmail}
        >
          <div class="mb-4">
            <label
              for="name"
              class="block text-gray-700 text-lg font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              class="form-input w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              required
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 text-lg font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              class="form-input w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              required
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-4">
            <label
              for="phone"
              class="block text-gray-700 text-lg font-bold mb-2"
            >
              Phone:
            </label>
            <input
              type="number"
              id="phone"
              name="from_number"
              class="form-input w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              required
              placeholder="Enter your Phone Number"
              max="99999999999"
            />
          </div>
          <div class="mb-4">
            <label
              for="message"
              class="block text-gray-700 text-lg font-bold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="form-textarea w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              required
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
