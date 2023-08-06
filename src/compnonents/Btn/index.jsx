import { Link } from "react-scroll";

const ButtonSmooth = ({ linkTo, value }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <Link
        smooth={true}
        to={linkTo}
        className="flex justify-center items-center uppercase bg-green-700 duration-200 w-[282px] h-[60px] text-white font-medium rounded-xl transition-all hover:bg-green-600 active:translate-y-[-5px] cursor-pointer md:w-[95%]"
      >
        {value}
      </Link>
    </div>
  );
};
export default ButtonSmooth;
