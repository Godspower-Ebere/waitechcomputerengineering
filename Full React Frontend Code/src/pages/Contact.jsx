import React from "react";
import ContactForm from "../Components/ContactForm";
import FAQS from "../Components/FAQS";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ContactForm></ContactForm>
      <FAQS></FAQS>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
