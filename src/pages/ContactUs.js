import React from "react";
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

      <div className="mb-5 flex justify-center items-center">
        <form
          name="contact2"
          className=""
          method="post"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              <input
                type="text"
                placeholder="First Name"
                name="Fname"
                isrequired="true"
                className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 m-3"
              />
            </label>
          </p>
          <p>
            <label>
              <input
                type="text"
                placeholder="Last Name"
                name="Lname"
                isrequired="true"
                className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 m-3"
              />
            </label>
          </p>
          <p>
            <label>
              <input
                placeholder="Email"
                isrequired="true"
                type="email"
                name="email"
                className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 m-3"
              />
            </label>
          </p>
          <p>
            <label>
              <textarea
              isrequired="true"
                placeholder="Message"
                name="message"
                className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 m-3"
              ></textarea>
            </label>
          </p>
          <button
            type="submit"
            label="subscribe"
            className="block mx-5  w-fit rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Click to send message!
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;
