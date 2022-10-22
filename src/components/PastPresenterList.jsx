import React from "react";

function PastPresenterList() {
  return (
    <div className="bg-gray-50 pt-9">
      <div className="text-center mb-24">
        <p className="mt-1 pt-5 text-2xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
          Joe Horanzy
        </p>
        <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
          On April 28, 2022 we had Mr. Horanzy an electrical engineer who is
          currently a Principal Field Application Engineer at Infineon
          Technologies come in.To Download His Presentation{" "}
          <a
            className="underline"
            download="./assets/intro to EE.pptx"
            href="./assets/intro to EE.pptx"
          >
            Click Here
          </a>
        </p>
      </div>
      <div className="text-center">
        <p className="mt-1 pt-5 text-2xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
          Allen Chen
        </p>
        <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
          On May 26, 2022 we had Mr. Chen who was the mars 2020 entry, descent,
          and landing lead at NASA's Jet Propulsion Laboratory Pasedena, CA
          virtually present. He is currently a systems engineer in the Entry,
          Descent, and Landing Systems and Advanced Technologies group. You can
          find more information on him here,{" "}
          <a
            className="underline"
            href="https://mars.nasa.gov/people/profile/index.cfm?id=9167"
          >
            Bio
          </a>
          .
        </p>
      </div>
      <div className="text-center">
        <p className="mt-1 pt-5 text-2xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
          Max Brand
        </p>
        <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
          On September 22, 2022 we had Mr. Brand who has worked on jet engines
          at the world-renowned{" "}
          <a href="https://prattwhitney.com/" className="underline">
            Pratt & Whitney
          </a>
          , and spacecraft at{" "}
          <a href="https://momentus.space" className="underline">
            Momentus
          </a>{" "}
          a company pioneering infrastructure services to support the growing
          space economy. Mr. Brand also received both his Bachelors's and
          Master's degrees at MIT.
        </p>
      </div>
      <div className="text-center">
        <p className="mt-1 pt-5 text-2xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
          Melvin Jose
        </p>
        <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
          On October 13th, we had our second presenter Melvin Jose. Mr. Jose has
          held a multitude of positions across many internationally renowned
          companies. He recently got his B.S. in Chemical Engineering from
          Drexel University during which he completed a Co-Op program with
          Johnson & Johnson in their consumer healthcare division. In 2017, he
          also did a Co-Op program in the Janssen Pharmaceutical Companies of
          Johnson & Johnson conducting Biologics Research. He is currently a
          project engineer at Catalent Pharma Solutions linked{" "}
          <a href="https://www.catalent.com/" className="underline">
            here
          </a>
          , which is the #1 partner in helping pharmaceutical, biotech, and
          consumer health innovators develop, deliver, and supply superior
          products that improve people's lives.
        </p>
      </div>
    </div>
  );
}

export default PastPresenterList;
