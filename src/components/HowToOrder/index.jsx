import { MdBorderColor, MdOutlineSecurity } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
const HowToOrder = () => {
  const whatToDo = [
    {
      id: 1,
      title: "Заявка",
      info: "Залишіть заявку на нашому сайті. Менеджер зв'яжеться з Вами найближчим часом.",
      icon: <MdBorderColor />,
    },

    {
      id: 2,
      title: "Доставка",
      info: "Ми надсилаємо Ваше замовлення поштою. Після отримання Ви оплачуєте товар.",
      icon: <TbTruckDelivery />,
    },
    {
      id: 3,
      title: "Гарантії",
      info: "100% гарантія якості. Кожен товар проходить ретельну перевірку перед відправкою.",
      icon: <MdOutlineSecurity />,
    },
  ];
  return (
    <div className="w-full mt-5 flex flex-col items-center">
      <h2 className="font-bold text-4xl text-center bg-no-repeat mb-2">
        Як замовити?
      </h2>
      <div className="flex flex-col md:flex-row justify-evenly px-5">
        {whatToDo.map(({ id, title, info, icon }) => (
          <div
            className="w-full md:w-[45%]  p-6 rounded-lg mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-105 transform transition-all duration-300 shadow-xl"
            key={id}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className=" font-bold text-xl">{title}</h3>
              <div className="text-2xl">{icon}</div>
            </div>
            <p className="text-base leading-relaxed">{info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HowToOrder;
