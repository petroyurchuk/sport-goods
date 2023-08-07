const WhyBoardItem = ({ title, iconOfAdv }) => {
  return (
    <div className="w-[50%] flex gap-y-2 flex-col items-center md:w-[33%]">
      <div>{iconOfAdv}</div>
      <h3 className="text-lg font-semibold text-green-600 text-center">
        {title}
      </h3>
    </div>
  );
};
export default WhyBoardItem;
