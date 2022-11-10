import React from "react";

function CurrentPresenterList() {
  return (
    <div className="bg-gray-50 pt-9 lg:h-96">
      <div className="text-center lg:mb-24 md:mb-0">
        <p className="mt-1 pt-5 text-2xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
          Ann Jacob
        </p>
        <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
          On November 11, at 2:20 pm in room A13, we plan to have our third
          presenter Ann Jacob! Mrs. Jacob has had an extensive career in
          avionics, and electrical engineering. Mrs. Jacob was not only 1st in
          her class at internationally recognized Mahatma Gandhi National
          University but also graduated with a bachelors in Electronical
          Engineering. She has also received her Masters in Buisness
          Adminstration. Mrs. Jacob worked in both avionics and electrical
          engineer in her time at Hindustan Aeronautics Limited linked{" "}
          <a href="https://hal-india.co.in/" className="underline">
            here
          </a>
          . Mrs. Jacob currently works at Leonardo linked{" "}
          <a
            href="https://www.leonardo.com/en/about/profile"
            className="underline"
          >
            here
          </a>
          , the company plays a prominent role in major international strategic
          programmes and is a trusted technological partner of governments,
          defence agencies, institutions and enterprises.
        </p>
      </div>
    </div>
  );
}

export default CurrentPresenterList;
