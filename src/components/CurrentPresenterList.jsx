import React from "react";

function CurrentPresenterList() {
  return (
    <div className="bg-gray-50 pt-9 lg:h-96">
      <div className="text-center lg:mb-24 md:mb-0">
        <p className="mt-1 pt-5 text-2xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
          Melvin Jose
        </p>
        <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
          On October 13, at 2:20 in room A13 we plan to have our second
          presenter Melvin Jose! Mr. Hose has held a multitude of positions
          across many internationally renowned companies. He recently got his
          B.S in Chemical Engineering from Drexel University within which he
          completed a Co-Op program with Johnson & Johnson in their consumer
          healthcare division developing products. In 2017 he also did a Co-Op
          program in the Janssen Pharmaceutical Companies of Johnson & Johnson
          conducting Biologics Research. He is currently a project engineer at
          Catalent Pharma Solutions linked{" "}
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
