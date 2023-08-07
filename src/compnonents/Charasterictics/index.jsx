const Characteristics = () => {
  const characteristics = [
    {
      type: "Розміри",
      infoText: "63 х 18 х 2 см",
    },
    {
      type: "Вага, кг",
      infoText: "0.9",
    },
    {
      type: "Вид",
      infoText: "Поворотні",
    },
    {
      type: "Колір",
      infoText: "Чорний",
    },
    {
      type: "Матеріали",
      infoText: "Пластик",
    },

    {
      type: "Габарити упаковки",
      infoText: "32 х 19 х 8 см",
    },
    {
      type: "Країна реєстрації бренду",
      infoText: "Китай",
    },
    {
      type: "Гарантія",
      infoText: "14 днів",
    },
    {
      type: "Країна-виробник товару",
      infoText: "Україна",
    },
  ];
  return (
    <div
      name="характеристики"
      className="flex flex-col gap-y-5 items-center mt-10 "
    >
      <h2 className="text-xl md:text-5xl font-semibold">
        Основні характеристики
      </h2>
      <ul className="w-full px-5 flex flex-col md:w-[75%]">
        {characteristics.map(({ type, infoText }, index) => (
          <li key={index} className="flex">
            <h2 className="text-gray-500 break-keep ">{type}</h2>
            <div className="grow border-b-[1px] border-gray-300 border-dashed shrink relative top-[-8px]"></div>
            <span className="block capitalize text-sm text-blue-400">
              {infoText}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Characteristics;
