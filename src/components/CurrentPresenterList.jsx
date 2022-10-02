import React from "react";

function CurrentPresenterList() {
  return (
    <div className="bg-gray-50 pt-9 lg:h-96">
      <div className="text-center lg:mb-24 md:mb-0">
        <p className="mt-1 pt-5 text-2xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
          Melvin Jose
        </p>
        <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
          On October 13, at 2:20 in room A13 we plan to have Mr. Jose. He
          received his B.S in chemical engineering at Drexel University in 2007
          and from then on he has held a multitude of positions across many
          internationally renowned companies. In 2016 he worked for Johnson &
          Johnson in their consumer healthcare division developing products and
          in 2017 he worked in the Janssen Pharmaceutical Companies of Johnson &
          Johnson conducting Biologics Research. He is currently a project
          engineer at Catalent Pharma Solutions linked{" "}
          <a href="https://www.catalent.com/" className="underline">
            here
          </a>{" "}
          which is the #1 partner in helping pharmaceutical, biotech, and
          consumer health innovators develop, deliver, and supply superior
          products that improve people's lives.
        </p>
      </div>
    </div>
  );
}

export default CurrentPresenterList;
