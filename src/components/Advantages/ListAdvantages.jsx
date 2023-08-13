import ListItemAdvantages from "./ListItemAdvantages";
import { SlLike } from "react-icons/sl";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FcMoneyTransfer } from "react-icons/fc";
const ListAdvantages = () => {
  return (
    <div className="gap-4 flex flex-wrap justify-center md:gap-10 w-full bg-gradient-to-r from-purple-700 to-purple-500 md:flex-nowrap">
      <ListItemAdvantages
        icon={<SlLike fill="#fff" size={20} />}
        text="Доставка по Україні"
      />
      <ListItemAdvantages
        icon={<AiOutlineClockCircle fill="#fff" size={20} />}
        text="Обмежена пропозиція"
      />
      <ListItemAdvantages
        icon={<FcMoneyTransfer fill="#fff" size={20} />}
        text="Оплата при отриманні"
      />
    </div>
  );
};
export default ListAdvantages;
