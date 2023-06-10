import React from "react";

function CustomForm2() {
  return (
    <div className="mt-10 sm:mt-12 flex align-content: center">
      <form
        name="contact"
        className="sm:mx-auto sm:max-w-xl lg:mx-0"
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
              placeholder="Non School Email"
              isrequired="true"
              type="email"
              name="email"
              className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 m-3"
            />
          </label>
        </p>
        {/* <p>
                    <label>
                      Message: <textarea name="message"></textarea>
                    </label>
                  </p> */}
        <button
          type="submit"
          label="subscribe"
          className="block mx-5  w-fit rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Click to add to emailing list!
        </button>
      </form>
    </div>
  );
}

export default CustomForm2;
