import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import axios from "axios";
const Replies = () => {
  React.useEffect(() => {
    const fetchReplies = async () => {
      try {
        const response = await axios
          .get("https://64c688f90a25021fde91bd9e.mockapi.io/replies")
          .then((res) => res.data);
        setReviews(response);
      } catch (error) {
        throw error;
      }
    };
    fetchReplies();
  }, []);

  const [errorMessage, setErrorMessage] = React.useState({
    color: "",
    colorForEmail: "",
    colorForText: "",
    textErrorForName: "",
    textErrorForText: "",
    textErrorForEmail: "",
  });
  const [reviews, setReviews] = React.useState([]);
  const [newReview, setNewReview] = React.useState({
    name: "",
    email: "",
    text: "",
  });
  const inputNameRef = React.useRef(null);
  const inputEmailRef = React.useRef(null);
  const inputMessageRef = React.useRef(null);

  const handleName = (e) => {
    setNewReview((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };
  const handleEmail = (e) => {
    setNewReview((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };
  const handleText = (e) => {
    setNewReview((prevState) => ({
      ...prevState,
      text: e.target.value,
    }));
  };
  const onSend = (e) => {
    e.preventDefault();
    let errors = {
      textErrorForName: "",
      textErrorForEmail: "",
      textErrorForText: "",
      color: "",
      colorForEmail: "",
      colorForText: "",
    };
    if (
      !/^[a-zA-Z]{2,20}$/.test(newReview.name) &&
      !/^[а-яА-ЯІіЇїЄєҐґ]{2,20}$/
    ) {
      errors.textErrorForName = "Name is required";
      errors.color = "red";
    }

    if (newReview.text.length < 3) {
      errors.textErrorForText = "Comment is required";
      errors.colorForText = "red";
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(newReview.email)) {
      errors.textErrorForEmail = "Email is required";
      errors.colorForEmail = "red";
    }

    if (
      !errors.textErrorForName &&
      !errors.textErrorForEmail &&
      !errors.textErrorForText
    ) {
      setReviews((prevState) => {
        return [...prevState, newReview];
      });
      axios.post(
        "https://64c688f90a25021fde91bd9e.mockapi.io/replies",
        newReview
      );
      setNewReview({ name: "", email: "", text: "" });
      setErrorMessage({
        color: "",
        colorForEmail: "",
        colorForText: "",
        textErrorForName: "",
        textErrorForEmail: "",
        textErrorForText: "",
      });
    } else {
      setErrorMessage((prevState) => ({
        ...prevState,
        ...errors,
      }));
    }
  };
  return (
    <div className="w-full flex flex-col pb-5" name="відгуки">
      <div className="flex flex-col gap-y-5  mb-5 w-[90%] m-auto">
        {reviews.map(({ name, email, text }, index) => (
          <div className="gap-x-2 flex  md:gap-x-3 " key={index}>
            <div>
              <img src="/img/user-photo.png" alt="user-avatar" />
            </div>
            <div>
              <div className="flex-col gap-x-1 md:flex-row flex md:gap-x-2 ">
                <div>
                  {" "}
                  <span className="text-gray-600 text-sm italic">Name: </span>
                  <span className="font-semibold">{name}</span>
                </div>
                <div>
                  <span className="text-gray-600 text-sm italic">Email: </span>
                  <span className="font-semibold">{email}</span>
                </div>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Message: </span>

                <span className="italic">{text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={onSend} className="flex items-center flex-col">
        <h3 className="uppercase text-2xl font-semibold mb-3">
          Залиште відгук
        </h3>
        <div className="flex flex-col gap-y-5">
          <div className="relative flex max-w-[285px] w-[95%] md:max-w-[600px] md:w-[600px] border-2">
            <textarea
              ref={inputMessageRef}
              className="h-[100px] w-full resize-none text-gray-600 border-gray-400 outline-gray-500 p-2 text-sm"
              type={"text"}
              name="message"
              placeholder="Коментар:"
              value={newReview.text}
              onChange={(e) => handleText(e)}
              style={{
                borderColor: errorMessage.colorForText,
              }}
            />
            <div className="flex items-center">
              {newReview.text && (
                <CiCircleRemove
                  className="absolute right-4 cursor-pointer"
                  onClick={() => {
                    setNewReview((prevState) => ({
                      ...prevState,
                      text: "",
                    }));
                    inputMessageRef.current.focus();
                  }}
                />
              )}
            </div>
          </div>
          <div className="text-red-600">{errorMessage.textErrorForText}</div>
          <div>
            <div className="max-w-[285px] relative flex items-center  border-2 md:max-w-[600px] md:w-[600px] h-[60px] px-2">
              <div className="border-r-2">
                <BsFillPersonFill size={20} className="mr-2" />
              </div>
              <input
                ref={inputNameRef}
                className="h-full w-full ml-2 outline-none text-gray-600"
                type={"text"}
                name="name"
                placeholder="Введіть ваше ім'я"
                value={newReview.name}
                onChange={(e) => handleName(e)}
              />
              <div className="flex items-center">
                {newReview.name && (
                  <CiCircleRemove
                    className="absolute right-4 cursor-pointer"
                    onClick={() => {
                      setNewReview((prevState) => ({
                        ...prevState,
                        name: "",
                      }));
                      inputNameRef.current.focus();
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="text-red-600">{errorMessage.textErrorForName}</div>
          <div>
            <div className="max-w-[285px] relative flex items-center md:max-w-[600px]  border-2 md:w-[600px] h-[60px] px-2">
              <div className="border-r-2">
                <AiOutlineMail size={20} className="mr-2" />
              </div>
              <input
                ref={inputEmailRef}
                className="h-full w-full ml-2 outline-none text-gray-600"
                type={"email"}
                name="email"
                placeholder="Введіть вашу пошту"
                value={newReview.email}
                onChange={handleEmail}
              />
              <div className="flex items-center">
                {newReview.email && (
                  <CiCircleRemove
                    className="absolute right-4 cursor-pointer"
                    onClick={() => {
                      setNewReview((prevState) => ({
                        ...prevState,
                        email: "",
                      }));
                      inputEmailRef.current.focus();
                    }}
                  />
                )}
              </div>
            </div>
            <div className="text-red-600">{errorMessage.textErrorForEmail}</div>
          </div>
          <button
            type="submit"
            className="max-w-[285px] uppercase bg-green-700 duration-200 md:max-w-[600px] w-[600px] h-[60px] text-white font-medium rounded-xl transition-all hover:bg-green-600 active:translate-y-[-5px]"
          >
            Залишити відгук
          </button>
        </div>
      </form>
    </div>
  );
};
export default Replies;
