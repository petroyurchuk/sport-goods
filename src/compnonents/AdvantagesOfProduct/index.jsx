import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
const AdvantagesOfProduct = () => {
  const advantages = ["портативність", "дизайн", "легкість"];
  return (
    <div
      name="особливості"
      className="w-full flex justify-center items-center md:block"
    >
      <ul className="px-[20px] py-[10px] md:flex  justify-between">
        {advantages.map((item, index) => (
          <li
            key={index}
            className="flex items-center w-full md:justify-center"
          >
            <AiOutlineCheck fill="green" className="mr-6" size={25} />
            <h4 className="text-lg  text-center font-bold md:text-2xl">
              {item}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AdvantagesOfProduct;
