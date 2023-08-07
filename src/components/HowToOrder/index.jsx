const HowToOrder = () => {
  return (
    <div className="w-full mt-5 flex flex-col items-center">
      <h2 className="font-bold text-4xl text-center bg-no-repeat mb-2">
        Як замовити?
      </h2>
      <div className="bg-order-1 min-h-[84px]  w-full bg-cover bg-no-repeat  md:w-[50%] md:h-[142px]">
        <div className="p-[10px]">
          <h3 className="text-white font-semibold">01 - Заявка</h3>
          <p className="text-white italic">Заповніть форму </p>
        </div>
      </div>
      <div className="bg-order-2 min-h-[84px] w-full bg-cover bg-no-repeat md:w-[50%] md:h-[142px]">
        <div className="p-[10px] flex flex-col items-end">
          <h3 className="text-white font-semibold text-right">02 - Дзвінок</h3>
          <p className="italic text-white max-w-[140px]">
            Очікуйте дзвінка від менеджера для уточнення даних
          </p>
        </div>
      </div>
      <div className="bg-order-3 min-h-[84px] w-full bg-cover bg-no-repeat md:w-[50%] md:h-[142px]">
        <div className="p-[10px]">
          <h3 className="text-white font-semibold">03 - Надсилання</h3>
          <p className="italic text-white max-w-[140px]">
            Відправка протягом 1-2 днів
          </p>
        </div>
      </div>
      <div className="bg-order-4 min-h-[84px] w-full  bg-cover bg-no-repeat md:w-[50%] md:h-[142px]">
        <div className="p-[10px] flex flex-col items-end">
          <h3 className="text-white font-semibold text-right">
            04 - Отримання
          </h3>
          <p className="italic text-white max-w-[140px]">
            Очікуйте доставку на вашу адресу
          </p>
        </div>
      </div>
    </div>
  );
};
export default HowToOrder;
