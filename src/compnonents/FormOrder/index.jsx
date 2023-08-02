import React from "react";
import { BsFillPersonFill, BsTelephoneFill } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const FormOrder = () => {
  const textFail = "Сталося помилка при відправці даних.Спробуйте пізніше";
  const textSuccess =
    "Дякую за замовлення, очікуйте дзвінка від менеджера для уточнення даних";
  const [nameInput, setNameInput] = React.useState("");
  const [phoneInput, setPhoneInput] = React.useState("");
  const nameInputRef = React.useRef(null);
  const phoneInputRef = React.useRef(null);
  const [state, handleSubmit] = useForm("mvojzody");
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);
  React.useEffect(() => {
    if (state.succeeded) {
      axios.post(`https://64c688f90a25021fde91bd9e.mockapi.io/orders`, {
        nameInput,
        phoneInput,
      });
      setNameInput("");
      setPhoneInput("");
      toast.success(textSuccess);
    }
    if (!state.succeeded && isButtonClicked) {
      toast.error(textFail);
    }
  }, [isButtonClicked, state.succeeded]);

  return (
    <form
      name="замовити"
      className="flex justify-center items-center min-h-[400px] flex-col gap-y-6"
      onSubmit={handleSubmit}
    >
      <ToastContainer position="top-center" />
      <div className=" relative flex items-center  border-2 w-[282px] h-[60px] px-2">
        <div className="border-r-2">
          <BsFillPersonFill size={20} className="mr-2" />
        </div>
        <input
          id="name"
          ref={nameInputRef}
          name="name"
          type="text"
          placeholder="Введіть ваше ім'я"
          className="h-full w-full ml-2 outline-none"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <div className="flex items-center">
          {nameInput ? (
            <CiCircleRemove
              className="absolute right-4 cursor-pointer"
              onClick={() => {
                setNameInput("");
                nameInputRef.current.focus();
              }}
            />
          ) : null}
        </div>
      </div>
      <div className="relative flex items-center  border-2 w-[282px] h-[60px] px-2">
        <div className="border-r-2">
          <BsTelephoneFill size={20} className="mr-2" />
        </div>
        <input
          id="phone"
          ref={phoneInputRef}
          type="tel"
          name="phone"
          placeholder="Введіть ваш телефон"
          className="h-full w-full ml-2 outline-none"
          value={phoneInput}
          onChange={(e) => setPhoneInput(e.target.value)}
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        <div className="flex items-center">
          {phoneInput ? (
            <CiCircleRemove
              className="absolute right-4 cursor-pointer"
              onClick={() => {
                setPhoneInput("");
                phoneInputRef.current.focus();
              }}
            />
          ) : null}
        </div>
      </div>
      <button
        className="uppercase bg-green-700 duration-200 w-[282px] h-[60px] text-white font-medium rounded-xl transition-all hover:bg-green-600 active:translate-y-[-5px]"
        type="submit"
        onClick={() => setIsButtonClicked(true)}
        disabled={state.submitting}
      >
        Придбати зараз
      </button>
    </form>
  );
};
export default FormOrder;
