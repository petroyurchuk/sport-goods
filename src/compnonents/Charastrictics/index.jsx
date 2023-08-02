const Characteristics = () => {
  const characteristics = [
    {
      type: "Вікова категорія",
      infoText: "доросла",
    },
    {
      type: "Стан",
      infoText: "Новий",
    },
    {
      type: "колір",
      infoText: "Чорний",
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
      <ul className="w-full px-5 flex flex-col md:w-[25%]">
        {characteristics.map(({ type, infoText }, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-2"
          >
            <h2 className="text-gray-500 break-keep ">{type}</h2>
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
