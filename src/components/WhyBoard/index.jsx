import React from "react";
import WhyBoardItem from "./WhyBoardItem";
import { FaMobileAlt, FaThumbsUp, FaFolderOpen } from "react-icons/fa";
import { RiSlowDownLine } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { GiDiceEightFacesEight, GiGauntlet } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
const WhyBoard = () => {
  return (
    <div className="w-full  md:w-[95%] m-auto mt-5" name="особливості">
      <h1
        className="text-2xl  font-extrabold text-center
      "
      >
        Чому саме Платформа для віджимань Push Up Rack Board?
      </h1>
      <div className="flex px-2 w-[90%] m-auto shadow-md min-h-[100px] rounded py-2 flex-wrap gap-y-2">
        <WhyBoardItem
          title={"Портативний"}
          iconOfAdv={<FaMobileAlt size={30} />}
        />
        <WhyBoardItem
          title={"Легко монтується і демонтується"}
          iconOfAdv={<FaThumbsUp size={30} />}
        />
        <WhyBoardItem
          title={"Складаний дизайн"}
          iconOfAdv={<FaFolderOpen size={30} />}
        />
        <WhyBoardItem
          title={"Мала вага"}
          iconOfAdv={<RiSlowDownLine size={30} />}
        />
        <WhyBoardItem
          title={"Простота використання"}
          iconOfAdv={<FiBox size={30} />}
        />
        <WhyBoardItem
          title={"Різні кольори поєднують в собі тренування різних частин тіла"}
          iconOfAdv={<GiDiceEightFacesEight size={30} />}
        />
        <WhyBoardItem
          title={"Стійка платформа"}
          iconOfAdv={<AiOutlineSafetyCertificate size={30} />}
        />
        <WhyBoardItem
          title={"Міцні упори"}
          iconOfAdv={<GiGauntlet size={30} />}
        />
      </div>
    </div>
  );
};
export default WhyBoard;
