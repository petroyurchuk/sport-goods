import React from "react";
const OfferPrice = () => {
  return (
    <div className="gap-y-2 flex-wrap md:flex-nowrap flex border-2 border-t-0 justify-center items-center md:gap-12">
      <div className=" md:flex-nowrap w-full md:max-w-[50%] flex justify-center items-center gap-2 md:border-r-2">
        <h3 className="font-medium text-lg">Звичайна ціна:</h3>
        <h2 className="font-extrabold text-2xl text-gray-400">
          <s>699 грн.</s>
        </h2>
      </div>
      <div className="flex-wrap md:flex-nowrap w-full md:max-w-[50%] justify-center flex items-center gap-2">
        <h3 className="font-medium text-lg">Ціна зі знижкою 14%:</h3>
        <h2 className="font-extrabold text-2xl ">599 грн.</h2>
      </div>
    </div>
  );
};
export default OfferPrice;
