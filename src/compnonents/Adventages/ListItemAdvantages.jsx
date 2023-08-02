const ListItemAdvantages = ({ icon, text }) => {
  return (
    <div className="w-full flex justify-center items-center gap-1 md:max-w-[33%]">
      <div>{icon}</div>
      <div className="text-white">{text}</div>
    </div>
  );
};
export default ListItemAdvantages;
