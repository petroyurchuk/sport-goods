import React from "react";
import { FcLike } from "react-icons/fc";
const AdvantagesOfProduct = () => {
  const advantages = ["портативність", "дизайн", "легкість"];
  return (
    <div
      name="особливості"
      className="flex items-center mt-10 flex-col gap-y-6"
    >
      <h2 className="text-xl md:text-5xl font-semibold">Особливості</h2>
      <ul className="w-full px-5 flex flex-col gap-y-4 md:w-[35%] pl-5">
        {advantages.map((item, index) => (
          <li key={index} className="flex  items-center ">
            <FcLike className="mr-6" size={25} />
            <h4 className="text-sm  text-left md:text-2xl">{item}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AdvantagesOfProduct;
