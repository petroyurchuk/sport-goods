import React from "react";
import ListAdvantages from "./components/Advantages/ListAdvantages";
import ButtonSmooth from "./components/Btn";
import Characteristics from "./components/Characteristics";
import Description from "./components/Description";
import FormOrder from "./components/FormOrder";
import Header from "./components/Header";
import HowToOrder from "./components/HowToOrder";
import Offer from "./components/Offer";
import OfferPrice from "./components/Offer/OfferPrice";
import Replies from "./components/Replies";
import Slider from "./components/Slider";
import SliderWhyUs from "./components/SliderWhyUs";
import TitleProduct from "./components/TitleProduct";
import Video from "./components/Video";
import WhyBoard from "./components/WhyBoard";

function App() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;
  const discountStartTime = `2023-${formattedMonth}-${formattedDay}T00:00:00`;

  return (
    <div className="m-auto max-w-screen-xl shadow-md">
      <Header />
      <TitleProduct />
      <Offer discountStartTime={discountStartTime} discountDuration={24} />
      <Slider />
      <ListAdvantages />
      <OfferPrice />
      <SliderWhyUs />
      <ButtonSmooth linkTo={"замовити"} value={"Замовити в 1 клік"} />
      <Description />
      <WhyBoard />
      <Characteristics />
      <ButtonSmooth linkTo={"замовити"} value={"Замовити в 1 клік"} />
      <HowToOrder />
      <Video />
      <FormOrder />
      <Replies />
    </div>
  );
}

export default App;
