import React from "react";
const OfferPrice = () => {
  return (
    <div className="gap-y-2 flex-wrap md:flex-nowrap flex justify-between items-center">
      <div className=" md:flex-nowrap w-full md:max-w-[50%] flex justify-center items-center gap-2">
        <h3 className="font-medium text-lg opacity-40 ">Звичайна ціна: </h3>
        <h2 className="font-extrabold text-2xl opacity-30">
          <s>999 грн.</s>
        </h2>
      </div>
      <div className="flex-wrap md:flex-nowrap w-full md:max-w-[50%] justify-center flex items-center gap-2">
        <h3 className="font-medium text-lg">Акційна ціна:</h3>
        <span className="inline-block px-2 bg-red-600 text-white rounded-md ">
          Економія 40%
        </span>
        <h2 className="font-extrabold text-4xl ">599 грн.</h2>
      </div>
    </div>
  );
};
export default OfferPrice;
