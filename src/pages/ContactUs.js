import React from "react";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function ContactUs() {
  return (
    <div>
      <Navbar />
      <Header
        heading="Contact Us"
        text="If you have any questions or know anyone that might be interested in presenting please use the form below to contact us."
      />
      <div className="flex content-center justify-center">
        {" "}
        <iframe
          className=""
          src="https://docs.google.com/forms/d/e/1FAIpQLSdgvaCdNEVoQvaZXhXLeoeIp_kvY3OPGPUNkxlJpHviOR_9Nw/viewform?embedded=true"
          width="640"
          height="730"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
