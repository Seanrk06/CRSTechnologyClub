import React from "react";

function CurrentEventList() {
  return (
    <div className="bg-gray-50 pt-9 lg:h-96">
      <div className="text-center lg:mb-24 md:mb-0">
        <p className="mt-1 pt-5 text-2xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
          3D printing Workshop!
        </p>
        <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
          On January 17th, at 2:20 pm in room A13, the Technology Club plans to
          host a workshop on 3D printing. During this workshop, we will teach
          how to design a model using industry-standard software and how
          engineers in the field use these technologies in their day-to-day
          lives. We will also guide you to bringing your designs into real life
          using state of the art 3d printers. We’ll let you keep your creations
          as recognition of your achievement and the work you put in. This is a
          great opportunity, especially for those looking to get ahead of an up
          incoming technology. Please consider joining us at this unique event,
          we’re sure that you'll find it worth it.
        </p>
      </div>
    </div>
  );
}

export default CurrentEventList;
